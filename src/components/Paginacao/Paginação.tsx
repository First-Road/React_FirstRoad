// PaginationComponent.js
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;

  ul{
    display: flex;
    list-style: none;
    padding: 0px;
    gap: 20px;
    align-items: flex-start;
  }

  li{
    cursor: pointer;
    font-size: 18px;

    &:hover{
      text-decoration: underline;
      transition: .8s;
    }
  }
`;

const Pagination = ({ pageCount, onPageChange }: any) => {
  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={'Voltar'}
        nextLabel={'Avançar'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginationContainer>
  );
};

export default Pagination;
