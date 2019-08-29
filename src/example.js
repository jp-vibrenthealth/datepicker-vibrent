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
      CalendarHeader: {
        style: ({ $theme }) => ({
          backgroundColor: $theme.colors.mono100
        })
      },
      MonthHeader: {
        style: ({ $theme }) => ({
          backgroundColor: $theme.colors.mono100,
          color: $theme.colors.mono700,
          borderTop: `1px ${$theme.colors.mono500} solid`
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
            ? $theme.colors.primary
            : "transparent",
          color: $selected ? "white" : $theme.colors.mono900,
          borderRadius: "50%"
        })
      }
    }}
  />
);
