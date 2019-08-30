import * as React from "react";
import { StatefulCalendar } from "baseui/datepicker";

const arrowBtnOverrides = ({ $theme }) => {
  return {
    color: $theme.colors.mono900
  };
};

export default () => (
  <StatefulCalendar
    initialState={{ value: new Date() }}
    overrides={{
      CalendarContainer: {
        style: ({ $theme }) => ({
          width: "350px",
          fontSize: "14px"
        })
      },
      CalendarHeader: {
        style: ({ $theme }) => ({
          backgroundColor: $theme.colors.mono100
        })
      },
      MonthContainer: {
        style: () => ({
          borderTop: "1px solid #e1e1e1",
          borderLeft: "1px solid #e1e1e1",
          boxShadow: "1.2px 2.7px 2px 0 rgba(0, 0, 0, 0.1)"
        })
      },
      MonthHeader: {
        style: ({ $theme }) => ({
          backgroundColor: "white",
          color: "#666666",
          borderTop: "1px solid #e1e1e1",
          fontSize: "12px"
        })
      },
      MonthYearSelectButton: {
        style: ({ $theme }) => ({
          color: $theme.colors.mono900
        })
      },
      MonthYearSelectIconContainer: {
        style: ({ $theme }) => ({
          display: "none"
        })
      },
      PrevButton: {
        style: arrowBtnOverrides
      },
      NextButton: {
        style: arrowBtnOverrides
      },
      Month: {
        style: () => ({
          borderRadius: "50%"
        })
      },
      Day: {
        style: ({ $theme, $selected, $isHighlighted }) => ({
          backgroundColor: $selected
            ? "#0098db"
            : $isHighlighted
            ? $theme.colors.mono400
            : "transparent",
          color: $selected ? "white" : $theme.colors.mono900,
          borderRadius: "50%",
          ":first-child": {
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%"
          },
          ":last-child": {
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%"
          }
        })
      }
    }}
  />
);
