import React from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";

export const ContentGrid = ({
  components,
  gutter,
  childClassName,
  xs,
  sm,
  md,
  lg,
  xl
}) => {
  const n = components.length;
  console.log("GOT", n, "components");
  return (
    <Row gutter={gutter}>
      {components &&
        components.map(child => (
          <Col
            xs={{ span: xs || n }}
            sm={{ span: sm }}
            md={{ span: md }}
            lg={{ span: lg }}
            xl={{ span: xl }}
            className={childClassName}
          >
            {child}
          </Col>
        ))}
    </Row>
  );
};
