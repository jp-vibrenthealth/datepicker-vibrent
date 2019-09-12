import * as React from "react";
import { StatefulCalendar } from "baseui/datepicker";
// import { Label3 } from "baseui/typography";
import { isSameDay, isBefore } from "baseui/datepicker/utils";

const selectableDates = [
  new Date("09/5/2019"),
  new Date("09/6/2019"),
  new Date("09/7/2019"),
  new Date("09/8/2019"),
  new Date("09/11/2019"),
  new Date("09/12/2019"),
  new Date("09/13/2019"),
  new Date("09/14/2019"),
  new Date("09/15/2019"),
  new Date("09/16/2019"),
  new Date("09/20/2019"),
  new Date("09/27/2019"),
  new Date("09/29/2019"),
  new Date("10/15/2019")
];

// const datesToExclude = [
//   new Date("09/1/2019"),
//   new Date("09/2/2019"),
//   new Date("09/3/2019"),
//   new Date("09/4/2019")
// ];

// const appointmentDates = [];
const isTodaysDate = $date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return isSameDay($date, today);
};

const isDayBeforeToday = $date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return isBefore($date, today);
};

const colorOfDay = ($date, $selected, $disabled) => {
  if (isDayBeforeToday($date)) {
    return "#999999";
  } else if (isTodaysDate($date) && $selected) {
    return "#ffffff";
  } else if (isTodaysDate($date) && !$selected) {
    return "#333333";
  } else if ($disabled) {
    return "#666666";
  } else if ($selected) {
    return "#ffffff";
  } else {
    return "#0098db";
  }
};

const colorOfBackground = ($date, $selected) => {
  if ($selected) {
    return "#0098db";
  } else if (isTodaysDate($date) && !$selected) {
    return "#e6e6e6";
  } else {
    return "transparent";
  }
};

export default () => (
  <StatefulCalendar
    initialState={{ value: new Date() }}
    onDayClick={() => console.log("onDayClick event fired.")}
    includeDates={selectableDates}
    // excludeDates={datesToExclude}
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
        style: () => ({
          backgroundColor: "white",
          color: "#666666",
          borderTop: "1px solid #e1e1e1",
          fontSize: "12px",
          marginRight: "35px",
          marginLeft: "35px"
        })
      },
      MonthYearSelectButton: {
        style: () => ({
          color: "#333333",
          ":active": {
            backgroundColor: "transparent"
          },
          ":focus": {
            backgroundColor: "transparent"
          }
        }),
        props: {
          overrides: {
            Menu: StyledMenu => "hello"
          }
        }
      },
      MonthYearSelectIconContainer: {
        style: () => ({
          // display: "none"
          color: "#333333",
          marginLeft: "4px"
        })
      },
      PrevButton: {
        style: () => ({
          marginLeft: "45px",
          color: "#666666",
          ":active": {
            backgroundColor: "transparent"
          },
          ":focus": {
            backgroundColor: "transparent"
          }
        })
      },
      NextButton: {
        style: () => ({
          marginRight: "45px",
          color: "#666666",
          ":active": {
            backgroundColor: "transparent"
          },
          ":focus": {
            backgroundColor: "transparent"
          }
        })
      },
      Month: {
        style: () => ({
          borderRadius: "50%"
        })
      },
      Day: {
        onClick: $date => {
          console.log($date);
        },
        style: obj => {
          const { $disabled, $selected, $isHighlighted, $date } = obj;

          return {
            backgroundColor: colorOfBackground(
              $date,
              $selected,
              $isHighlighted
            ),
            color: colorOfDay($date, $selected, $disabled),
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            ":first-child": {
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%"
            },
            ":last-child": {
              borderTopRightRadius: "50%",
              borderBottomRightRadius: "50%"
            }
          };
        }
      }
    }}
  />
);
