import {
  Box,
  Text,
  Heading,
  Badge,
  Link,
  ListItem,
  UnorderedList,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import {
  getProblemDifficultyColor,
  getProblemDifficultyTitle,
  getTopicDifficultyBgColor,
  getTopicDifficultyColor,
  getTopicDifficultyTitle,
  renderImportanceStars,
} from "../utils/topicList";
import Head from "next/head";

const topicDifficultyDesc = {
  0: "Suitable for beginners, like if your Codeforces rating is less than 1400.",
  1: "Suitable for experienced beginners, like if your Codeforces rating is around 1400-1800.",
  2: "For intermediate users, like if your Codeforces rating is around 1800-2200.",
  3: "For advanced users, like if your Codeforces rating is 2200+.",
  4: "For very advanced users, like if your Codeforces rating is 2600+. Or if you are curious about the topic.",
};
const topicImportanceDesc = {
  1: "Rare and learn it for the fun of it.",
  2: "Occasional and it is good to know.",
  3: "Frequent and you should know this.",
};

const AboutPage = () => {
  return (
    <Box bg="gray.100">
      <Box maxW="5xl" mx="auto" p={4} bg="gray.50">
        <Head>
          <title>About</title>
        </Head>
        <Box p={2}>
          <Heading size="lg" mb={4}>
            About the Topic List
          </Heading>
          <Text fontSize="md" mb={2}>
            The Topic List is designed to provide structured learning paths for
            Competitive Programming. Each topic is categorized by difficulty and
            importance to guide learners from basic to advanced levels.
          </Text>
          <Heading size="md" mb={2} mt={4}>
            Topics
          </Heading>
          <Text fontSize="md" mb={2}>
            A topic is a concept or a technique that is used in solving
            problems. In this topic list, not all topics are actual topics per
            se, some are useful techniques or an educational problem or resource
            but contains ideas which can be used in future problems.
            <br /> <br />
            Each topic is classified by difficulty and importance, and is
            accompanied by a list of resources, templates, and problems to
            practice. The topics are categorized in a structured manner like all
            Number Theory topics are grouped together, all Graph Theory topics
            are grouped together and so on. Under each category, you will find
            some subcategories like under Data Structures you will find Segment
            Tree and under this subcategory, you will find different variations
            and topics related to Segment Tree.
          </Text>
          <Heading size="md" mb={2} mt={4} id="topic-difficulty">
            Topic Difficulty
          </Heading>
          <Text fontSize="md" mb={2}>
            Topics are classified into several difficulty levels:
          </Text>
          <Table variant="simple" mb={4}>
            <Thead>
              <Tr>
                <Th>Difficulty</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 5 }, (_, i) => i).map((i) => (
                <Tr key={i}>
                  <Td>
                    <HStack>
                      <Box
                        bg={getTopicDifficultyBgColor(i)}
                        w="4px"
                        h="16px"
                        mr={-2}
                      />
                      <Badge colorScheme={getTopicDifficultyColor(i)}>
                        {getTopicDifficultyTitle(i)}
                      </Badge>
                    </HStack>
                  </Td>
                  <Td>{topicDifficultyDesc[i]}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <i>
            Note that the difficulty levels are subjective and may vary
            depending on the learner's experience and familiarity with the
            topic.
          </i>
          <br />
          Also it is hard to classify a topic based on Codeforces rating, as in
          Codeforces you can have a high rating without knowing barely any
          topic. But these topics might be important in ICPC contests. So, I
          just provided a rough estimate of the difficulty and you should adjust
          it according to your experience.
          <Heading size="md" mb={2} mt={4} id="topic-importance">
            Topic Importance / Relevance
          </Heading>
          <Text fontSize="md" mb={2}>
            Importance/Relevance is indicated by stars, which reflects the
            frequency, relevance and likelihood of topics appearing in a future
            contest.
          </Text>
          <Table variant="simple" mb={4}>
            <Thead>
              <Tr>
                <Th>Importance</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 3 }, (_, i) => i).map((i) => (
                <Tr key={3 - i}>
                  <Td>
                    <Box w="25px">{renderImportanceStars(3 - i)}</Box>
                  </Td>
                  <Td>{topicImportanceDesc[3 - i]}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <i>
            Note that some 3 star topics might not be that frequent in contests
            but they are important to know in Competitive Programming.{" "}
          </i>
          <Text fontSize="md" mb={2} mt={6}>
            Each topic has some resources, templates and practice problems.
          </Text>
          <Heading size="md" mb={2}>
            Resources
          </Heading>
          <Text fontSize="md" mb={2}>
            A resource is a tutorial or a blog or a video that explains the
            topic. Resources are listed in the recommended order of study. But
            it would be better if you go through all the resources listed in the
            topic. I have also tried to add some comments on the resources to
            mention in which part of the resource you will find the topic.
          </Text>
          <Heading size="md" mb={2} mt={4}>
            Templates
          </Heading>
          <Text fontSize="md" mb={2}>
            A template is a code snippet that is used to solve problems related
            to the topic. Templates are provided as a reference and it is highly
            recommended to create your own templates.
            <br />
            <br />
            You may not call it a template because some of them don’t support
            the generalized use of the topic. But you can use them easily if you
            understand the topic and solve problems using that template.
          </Text>
          <Heading size="md" mb={2} mt={4}>
            Problems
          </Heading>
          <Text fontSize="md" mb={2}>
            I have also attached some related problems to each topic so that you
            can practice the topic. Problems are taken from various online
            judges like Codeforces, AtCoder, CodeChef, etc. Starred problems are
            highly recommended for solving to grasp the topic thoroughly.
            Problems are organized by their relevance and difficulty concerning
            the topic. You can solve them in the given order.
          </Text>
          <Heading size="md" mb={2} mt={4} id="problem-difficulty">
            Problem Difficulty
          </Heading>
          <Text fontSize="md" mb={2}>
            Problems are classified into several difficulty levels. The
            difficulty means how hard the problem is w.r.t. to the difficulty
            level of this topic (so it's not same as the topic difficulty
            level).
          </Text>
          <UnorderedList pl={4} mb={2}>
            {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
              <ListItem key={i}>
                <HStack>
                  <Badge colorScheme={getProblemDifficultyColor(i)} mr={2}>
                    {getProblemDifficultyTitle(i)}
                  </Badge>{" "}
                </HStack>
              </ListItem>
            ))}
          </UnorderedList>
          
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
