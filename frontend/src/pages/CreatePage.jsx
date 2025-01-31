import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  const toast = useToast();
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!product.name || !product.price || !product.image) {
      toast({
        title: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const data = await createProduct(product);
    if (data?.success) {
      toast({
        title: "Product created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: `Failed to create product - ${data?.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setProduct({ name: "", price: "", image: "" });
  };
  return (
    <Container maxW={"container.md"}>
      <VStack spacing={8}>
        <Heading
          as={"h1"}
          size={"2xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          mb={8}
          color={useColorModeValue("#52796f", "#cad2c5")}
        >
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("#52796f", "#cad2c5")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              color={useColorModeValue("#cad2c5", "#2f3e46")}
              _placeholder={{
                color: useColorModeValue("#cad2c5", "#52796f"),
              }}
              borderColor={useColorModeValue("#cad2c5", "#52796f")}
              _hover={useColorModeValue(
                { borderColor: "#fff" },
                { borderColor: "#000" }
              )}
              focusBorderColor={useColorModeValue("#cad2c5", "#52796f")}
            />
            <Input
              name="price"
              placeholder="Price"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              color={useColorModeValue("#cad2c5", "#2f3e46")}
              _placeholder={{
                color: useColorModeValue("#cad2c5", "#52796f"),
              }}
              borderColor={useColorModeValue("#cad2c5", "#52796f")}
              _hover={useColorModeValue(
                { borderColor: "#fff" },
                { borderColor: "#000" }
              )}
              focusBorderColor={useColorModeValue("#cad2c5", "#52796f")}
            />
            <Input
              name="image"
              placeholder="Image URL"
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
              value={product.image}
              color={useColorModeValue("#cad2c5", "#2f3e46")}
              _placeholder={{
                color: useColorModeValue("#cad2c5", "#52796f"),
              }}
              borderColor={useColorModeValue("#cad2c5", "#52796f")}
              _hover={useColorModeValue(
                { borderColor: "#fff" },
                { borderColor: "#000" }
              )}
              focusBorderColor={useColorModeValue("#cad2c5", "#52796f")}
            />

            <Button
              variant={"subtle"}
              size="lg"
              w={"full"}
              color={useColorModeValue("#52796f", "#cad2c5")}
              bg={useColorModeValue("#cad2c5", "#52796f")}
              _hover={useColorModeValue({ bg: "#9ca398" }, { bg: "#3c5952" })}
              onClick={handleAddProduct}
            >
              Create
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
