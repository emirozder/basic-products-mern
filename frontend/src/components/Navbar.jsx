import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxW={"container.xl"}
      position={"sticky"}
      top={0}
      left={0}
      bg={useColorModeValue("#cad2c5", "#2f3e46")}
      zIndex={1}
    >
      <Flex
        minH={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          md: "row",
        }}
        gap={4}
        mb={{
          base: 8,
          md: 4,
        }}
        pt={{
          base: 4,
          md: 0,
        }}
        pb={{
          base: 4,
          md: 0,
        }}
      >
        <Text
          fontSize={{ base: "24px", sm: "28px" }}
          fontWeight={"bold"}
          textAlign={"center"}
          textWrap={"nowrap"}
          color={useColorModeValue("#52796f", "#cad2c5")}
        >
          <Link to={"/"}>Products MERN 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button
              bgColor={useColorModeValue("#52796f", "#cad2c5")}
              color={useColorModeValue("#cad2c5", "#52796f")}
              gap={2}
              _hover={useColorModeValue({ bg: "#3c5952" }, { bg: "#9ca398" })}
            >
              <CiSquarePlus size="20" strokeWidth={"1px"} />
              Create New Product
            </Button>
          </Link>
          <Button
            onClick={toggleColorMode}
            bgColor={useColorModeValue("#52796f", "#cad2c5")}
            color={useColorModeValue("#cad2c5", "#52796f")}
            _hover={useColorModeValue({ bg: "#3c5952" }, { bg: "#9ca398" })}
          >
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
