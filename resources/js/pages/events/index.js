import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BsFillCalendarFill } from 'react-icons/bs';
import { useGlobalState } from '../../components/global/ContextProvider';
import queryString from 'query-string';
import Hero from '../../components/shared/Hero';

const Events = ({location}) => {
  const [globalState, dispatch] = useGlobalState();
  const { page } = queryString.parse(location.search);
  const isLoading = globalState.visibility.waiting > 0;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/events', { params: { page } });
  //       const { current_page, last_page, per_page, total, data: responseData } = response.data;
  //       const paginate = { current_page, last_page, per_page, total };
        
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  //   // willUnmount
  //   return () => {
  //     dispatch({type: 'CLEAR_RESULTS'});
  //   };
  // }, [location.search, globalState.events.update]);
  return (
    <div className='fadein' id='result-top'>
      <Hero
        icon={BsFillCalendarFill}
        text='イベント情報'
        imageUrl='/img/event.jpg'
      />
      開発中
    </div>
  );
};

Events.propTypes = {
  location: PropTypes.object
};

export default Events;