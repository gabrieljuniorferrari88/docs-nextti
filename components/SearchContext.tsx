import React, { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Box, Flex, Icon, Input, useColorModeValue } from '@chakra-ui/react';
import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useKBar,
  useMatches,
} from 'kbar';
import { RiSearchLine } from 'react-icons/ri';
import { docsSections, siteConfig, topLevelSectionsRoutes } from '@/config';
import { WithChildren } from '@/types';
import slugger from 'github-slugger';

interface SearchProviderProps extends WithChildren {}

const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const router = useRouter();

  const actions  = useMemo(() => {
		

    let actions: Action[] = [
      {
        id: 'homepage',
        name: 'Inicio',
        keywords: 'Documentação Trabalho Avulso - Primeiros passos',
        section: 'Página Inicial',
        perform: () => router.push('/'),
      },
    ];

		

    topLevelSectionsRoutes.map((section) =>
      actions.push({
        id: `docs-${slugger.slug(section.label)}`,
        name: section.label,
        section: 'Sessões',
        icon: <Icon as={section.icon} />,
        perform: () => router.push(section.path),
      })
    );

    siteConfig.repo &&
      actions.push({
        id: 'external-github',
        name: 'GitHub',
        keywords: 'Github Git Repository Repo',
        section: 'Externo',
        perform: () => window.open(siteConfig.repo?.url, '_blank'),
      });

    docsSections.map(({ section, routes }) =>
      routes.map((route) =>
        actions.push({
          id: `docs-${slugger.slug(route.title)}`,
          name: route.title,
          section: 'Documentação',
          subtitle: `Docs / ${section} / ${route.title}`,
          perform: () => router.push(route.path),
        })
      )
    );

    return actions;
  }, [router]);

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <Box
          as={KBarPositioner}
          bgColor={useColorModeValue(
            'rgba(203,214,224,0.5)',
            'rgba(26,31,44,0.2)'
          )}
          backdropFilter="blur(12px)"
          zIndex="overlay"
        >
          <Box as={KBarAnimator} w="full" maxW="xl">
            <Box
              bgColor={useColorModeValue('white', 'gray.700')}
              borderTop="1px"
              borderColor="rgba(255,255,255,0.1)"
              borderRadius="3xl"
              overflow="hidden"
            >
              <Flex alignItems="center" p="4">
                <Icon
                  as={RiSearchLine}
                  boxSize="5"
                  color="gray.500"
                  mr={{ base: '2', md: '4' }}
                />
                <Input
                  as={KBarSearch}
									defaultPlaceholder='Digite um comando ou pesquisa'
                  variant="unstyled"
                  color={useColorModeValue('gray.700', 'gray.200')}
                  _placeholder={{
										color: useColorModeValue('gray.400', 'gray.500'),
                  }}
									placeholder='extra small size'
                />
                <Box
                  as="kbd"
                  fontSize="x-small"
                  fontWeight="semibold"
                  border="1px"
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                  borderRadius="md"
                  px="2"
                  py="0.5"
                  ml={{ base: '2', md: '4' }}
                >
                  ESC
                </Box>
              </Flex>
              <RenderResults />
            </Box>
          </Box>
        </Box>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

const RenderResults = () => {
  const { results } = useMatches();

  if (!!results.length) {
    <p>Nenhum resultado para a sua pesquisa...</p>;
  }

  const dividerColor = useColorModeValue(
    'rgba(0,0,0,0.05)',
    'rgba(255,255,255,0.05)'
  );
  const activeColor = useColorModeValue('gray.50', 'gray.600');
  const itemColor = useColorModeValue('gray.600', 'gray.200');
  const labelColor = useColorModeValue('gray.400', 'gray.500');

  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <Box>
            {typeof item === 'string' ? (
              <Box pt="3">
                <Box
                  borderTop="1px"
                  borderColor={dividerColor}
                  fontSize="xs"
                  fontWeight="semibold"
                  color={labelColor}
                  textTransform="uppercase"
                  letterSpacing="wide"
                  pt="4"
                  pb="2"
                  px="4"
                >
                  {item}
                </Box>
              </Box>
            ) : (
              <Box
                cursor="pointer"
                bgColor={active ? activeColor : 'transparent'}
                color={itemColor}
                px="4"
                py="2.5"
              >
                {item.subtitle && (
                  <Box fontSize="xs" color={labelColor}>
                    {item.subtitle}
                  </Box>
                )}
                {item.name}
              </Box>
            )}
          </Box>
        )}
      />
    );
  } else {
    return (
      <Box
        textAlign="center"
        color={labelColor}
        borderTop="1px"
        borderColor="rgba(255,255,255,0.05)"
        px="4"
        py="8"
      >
        Nenhum resultado para a sua pesquisa...
      </Box>
    );
  }
};

export default SearchProvider;
