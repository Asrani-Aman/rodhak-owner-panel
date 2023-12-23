import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
`;

const LeftCard = styled.div`
  /* margin-left: 48px; */
  float: left;
  background-color: #9c9191;
  backdrop-filter: blur(5px);
  z-index: 999;
  margin-top: -15px;
  /* color: #9c9191; */
  width: 23rem;
  flex-direction: column;
  border-radius: 0.75rem;
  background-color: white;
  background-clip: border-box;
  /* color: #fff; */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
  padding: 1rem;
`;

const RightCard = styled.div`
  /* margin-right: 36px; */
  width: 23rem;
  z-index: 999;
  text-align: center;
  float: right;
  padding: 1rem;
  margin-top: -15px;
  flex-direction: column;
  border-radius: 0.75rem;
  background-color: white;
  color: #4a5568;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
`;

const Title = styled.h5`
  margin-right: 4px;
  margin-bottom: 2px;
  display: block;
  font-family: sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #f48816;
`;

const ListItem = styled.li`
  margin-top: 0.5rem;
`;

const Card = () => {
  return (
    <CardContainer>
      <LeftCard>
        <div className="p-6">
          <Title>Reach Us At</Title>
          <ul>
            <ListItem>
              <span>
                <i className="fa fa-phone mr-2"></i>{" "}
              </span>
              dnd2rodhak@gmail.com
            </ListItem>
            {/* <ListItem>
              <span>
                <i className="fa fa-envelope mr-2"></i>{" "}
              </span>
              <span>feedback@geeksforgeeks.org</span>
            </ListItem> */}
            {/* <ListItem>
              <span>
                <i className="fa-solid fa-map-pin mr-2"></i>
              </span>
              A-143, 9th Floor, Sovereign Corporate
              <span className="pl-4">
                Tower, Sector-136, Noida, Uttar Pradesh
              </span>
            </ListItem> */}
          </ul>
        </div>
      </LeftCard>
      <RightCard>
        <div className="p-6 ">
          <Title>Branding & Collaboration</Title>
          <i className="fa fa-handshake fa-2xl"></i>
          <div className="text-left mt-4">
            <span>
              <i className="fa fa-envelope mr-2"></i>{" "}
            </span>
            <span>dnd2rodhak@gmail.com</span>
          </div>
          <div className="mt-2 text-left">
            <span>
              <i className="fa-solid fa-map-pin mr-2"></i>{" "}
            </span>
            A-143, 9th Floor, Sovereign Corporate Tower, Sector-
            <span className="pl-5">136, Mandi, Himachal Pradesh</span>
          </div>
        </div>
      </RightCard>
    </CardContainer>
  );
};

export default Card;
