import React from 'react';
import styled from 'styled-components';

const PageInfo = ({className, paginate}) => {
  const {
    current_page: currentPage,
    total
  } = paginate;
  return (
    <div className={className}>
      {
        total ?
        `${total}件中${currentPage}ページ目` :
        '検索結果0件'
      }
    </div>
  );
};

const StyledPageInfo = styled(PageInfo)`
  text-align: center;
  font-size: 14px;
  color: #777;
  margin-top: 6px;
`;

export default StyledPageInfo;