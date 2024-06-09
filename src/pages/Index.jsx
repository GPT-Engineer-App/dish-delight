import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Recipe Share
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and share your favorite recipes with the world!
        </Text>
        <Box boxShadow="md" borderRadius="md" overflow="hidden">
          <Image src="/images/recipe-banner.jpg" alt="Delicious food" />
        </Box>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" alignSelf="center">
          Add New Recipe
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;