import { Tag } from "@chakra-ui/react";

export const TagComponent = ({ type = "primary", children, ...otherProps }) => (
  <Tag
    sx={{
      backgroundColor: `brand.${type}`,
      textTransform: "uppercase",
      padding: "5px 16px",
      lineHeight: "20px"
    }}
    size={["md"]}
    variant="solid"
    fontSize={["12px"]}
    color="black"
    m={["0px auto 25px", "0px auto 25px", "0px 0px 25px"]}
    {...otherProps}
  >
    {children}
  </Tag>
);
