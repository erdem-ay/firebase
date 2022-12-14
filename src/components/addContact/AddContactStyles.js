import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const iconStyles = {
  position: "absolute",
  left: "160px",
  top: "0",
  fontSize: "25px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const inputOutside = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

export const Input = styled.input`
  border: 2px solid #eee;
  padding: 5px 10px 5xp 50px;
  font-size: 1rem;
  line-height: 30px;
  display: block;
  width: 100%;
  outline: 0;
`;

export const Select = styled.select`
  border: 2px solid #eee;
  padding: 5px 10px 5xp 80px;
  font-size: 1rem;
  line-height: 30px;
  display: block;
  width: 100%;
  outline: 0;
`;

export const Button = styled.button``;
