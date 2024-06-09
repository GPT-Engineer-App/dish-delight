import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Recipe Share</Heading>
        <Text fontSize="lg" textAlign="center">Discover and share amazing recipes from around the world.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/recipe-sharing.jpg" alt="Recipe Sharing" borderRadius="md" />
        </Box>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg" mt={6}>
          Add Your Recipe
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;