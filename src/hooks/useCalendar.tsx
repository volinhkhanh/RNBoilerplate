import React, {createContext, useContext, useState, ReactNode} from 'react';
import {Modal, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import moment from 'moment';
import {SafeAreaView} from 'react-native-safe-area-context';

import {dateRange} from '../utils/dateRange';

export interface ICalendarContext {
  calendarStart: Date | null;
  calendarEnd: Date | null;
  handleOpen: () => void;
}
export interface ICalendarProvider {
  children: ReactNode;
}

const CalendarContext = createContext<ICalendarContext>({
  calendarStart: new Date(),
  calendarEnd: new Date(),
  handleOpen: () => {},
});

const markedDatesStyle = {
  selected: true,
  color: '#39B78D',
  textColor: '#FFFFFF',
};

export const CalendarProvider = ({children}: ICalendarProvider) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [calendarStart, setCalendarStart] = useState<Date | null>(null);
  const [calendarEnd, setCalendarEnd] = useState<Date | null>(null);

  const handleOpen = () => setModalVisible(true);

  const handleDayPress = (date: any) => {
    const startDate = Object.keys(markedDates).find(
      key => markedDates[key]?.startingDay === true,
    );
    const endDate = Object.keys(markedDates).find(
      key =>
        markedDates[key]?.index !== 0 && markedDates[key]?.endingDay === true,
    );

    if (!startDate) {
      setMarkedDates({
        [date?.dateString]: {
          index: 0,
          startingDay: true,
          endingDay: true,
          ...markedDatesStyle,
        },
      });
      return;
    }

    if (!endDate) {
      if (new Date(date?.dateString) <= new Date(startDate)) {
        setMarkedDates({
          [date?.dateString]: {
            index: 0,
            startingDay: true,
            endingDay: true,
            ...markedDatesStyle,
          },
        });
        return;
      }
      let dates = dateRange(new Date(startDate), new Date(date?.dateString));
      let markedDatesObject = {};
      dates
        .map(date => moment(date).format('YYYY-MM-DD'))
        .forEach((date, i) => {
          Object.assign(markedDatesObject, {
            [date]: {
              index: i,
              ...markedDatesStyle,
              color:
                i === 0 || i === dates.length - 1 ? '#39B78D' : '#39B78D80',
              startingDay: i === 0,
              endingDay: i === dates.length - 1,
            },
          });
        });

      setMarkedDates(markedDatesObject);
      return;
    }

    if (startDate !== null && endDate !== null) {
      setMarkedDates({
        [date?.dateString]: {
          index: 0,
          startingDay: true,
          endingDay: true,
          ...markedDatesStyle,
        },
      });
      return;
    }
  };

  const handleClose = () => {
    const markedDatesArray = Object.keys(markedDates);
    const cloneMarkedDatesArray = JSON.parse(JSON.stringify(markedDatesArray));
    const start = cloneMarkedDatesArray[0]
      ? new Date(cloneMarkedDatesArray[0])
      : new Date();
    const end = cloneMarkedDatesArray[cloneMarkedDatesArray.length - 1]
      ? new Date(cloneMarkedDatesArray[cloneMarkedDatesArray.length - 1])
      : new Date();

    setCalendarStart(start);
    setCalendarEnd(end);

    setModalVisible(false);
  };

  return (
    <CalendarContext.Provider value={{calendarStart, calendarEnd, handleOpen}}>
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>

          <View style={styles.modalView}>
            <SafeAreaView>
              <CalendarList
                horizontal={true}
                pagingEnabled={true}
                markedDates={markedDates}
                markingType={'period'}
                onDayPress={day => {
                  handleDayPress(day);
                }}
                onDayLongPress={day => {}}
                onMonthChange={month => {}}
                firstDay={1}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                theme={{
                  'stylesheet.day.period': {
                    base: {
                      overflow: 'hidden',
                      height: 34,
                      alignItems: 'center',
                      width: 38,
                    },
                  },
                  todayTextColor: '#39B78D',
                  monthTextColor: '#39B78D',
                  indicatorColor: '#39B78D',
                }}
              />
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </CalendarContext.Provider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalView: {
    backgroundColor: 'white',
  },
});

export const useCalendar = () => useContext(CalendarContext);
