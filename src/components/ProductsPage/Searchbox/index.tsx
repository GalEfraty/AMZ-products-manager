import './searchbox.scss';

interface SearchboxProps {
  searchTerm: string;
  searchProduct: (term: string) => void;
  handleResetSearch: () => void;
}

function Searchbox({ searchTerm, searchProduct, handleResetSearch }: SearchboxProps) {
  return (
    <div className='searchbox'>
      <input
        placeholder='Search'
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => searchProduct(event.target.value)}
      />
      {searchTerm ? (
        <a role='button' onClick={handleResetSearch}>
          X
        </a>
      ) : null}
    </div>
  );
}

export default Searchbox;
