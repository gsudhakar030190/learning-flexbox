import "./AppLayout.css";
import styled from "styled-components";

const RightPane = styled.div`
  display: ${(props) => (props.selectionType === "room" ? "block" : "none")};
  flex: 1 1 2rem;
`;
const AppLayout = ({ selectionType, children }) => {
  const [
    header,
    userInfo,
    checkInAndCheckoutTime,
    resortOrRoomSelection,
    detailsAndOffers,
    footer,
  ] = children;
  return (
    <div className="flex-container">
      {<header className="flex-header">{header}</header>}
      <section className="user-info flex-userInfo">{userInfo}</section>
      <main className="flex-content">
        <aside className="flex-checkout">{checkInAndCheckoutTime}</aside>
        <article className="flex-selection">{resortOrRoomSelection}</article>
        <RightPane selectionType={selectionType} styles={"flex-features"}>
          <aside className="flex-features">{detailsAndOffers}</aside>
        </RightPane>
      </main>
      <footer className="flex-footer">{footer}</footer>
    </div>
  );
};

export default AppLayout;
