import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import reviewDummyData from "./reviewDummyData";

const ReviewCard = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card mb={4} style={{ maxWidth: "600px" }}>
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="sm">{data.title}</Heading>
                <Text>{data.doneDate + " " + data.place + "에서"}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<AddIcon />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{data.review}</Text>
        </CardBody>
        <Image objectFit="cover" src={data.file} alt="Chakra UI" />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<AddIcon />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<AddIcon />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<AddIcon />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReviewCard;
