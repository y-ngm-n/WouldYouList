import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Todo from "./Todo/Todo";
import Review from "./Review/Review";
import ShowReview from "./Review/ShowReview";
import ReviewParent from "./Review/ReviewParent";
import ReviewGrid from "./Review/ReviewGrid";

//메인 탭
//Home => MainTabs
const MainTabs = () => {
  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab>진행중인 리스트</Tab>
        <Tab>완료한 리스트</Tab>
        <Tab>리뷰</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {/* 진행중인 리스트 */}
          <Todo isDone={false} />
        </TabPanel>
        <TabPanel>
          {/* 완료한 리스트 */}
          <Todo isDone={true} />
        </TabPanel>
        <TabPanel>
          {/* 리뷰 */}
          {/* <Review /> */}
          <ReviewGrid />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MainTabs;
