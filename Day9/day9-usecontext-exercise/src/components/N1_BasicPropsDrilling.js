import React from "react";

const Title = (props) => <h1>{props.title}</h1>;

const Header = (props) => <Title title={props.header} />;

const BasicPropsDrilling = (props) => <Header header={props.value} />;

export default BasicPropsDrilling;
