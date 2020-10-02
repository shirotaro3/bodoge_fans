import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderContainer from '../../components/facilities/HeaderContainer';
import Loading from '../../components/shared/Loading';

const FacilitiesShow = ({match}) => {
  const [data, setData] = useState({});
  const [resolved, setResolved] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/facilities/${match.params.id}`);
      console.log(response);
      setData(response.data);
      setResolved(true);
    }
    fetchData();
  }, [match.params.id]);
  return (
    <div>
      {
        resolved ?
        <>
          <HeaderContainer
            imgUrl={data.header_image_url}
            name={data.name}
            description={data.description}
          />
          FacilityID:{match.params.id}
        </> :
        <Loading resolved={resolved} />
      }
    </div>
  );
};

export default FacilitiesShow;