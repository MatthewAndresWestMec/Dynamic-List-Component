import '../index.css';

const DynamicList = ({ data, type }) => {
  return (
    <div className="Container">
        <h1 className='head'>GIFTS!!!!!!</h1>
      {type === 'ol' ? (
        /* Ordered List */
        <ol>
          {data.map((dataItem) => {
            const { id, gift } = dataItem;
            return (
              <li key={id} className="ordered-list-item">
                {gift}
              </li>
            );
          })}
        </ol>
      ) : (
        /* Unordered List */
        <ul>
          {data.map((dataItem) => {
            const { id, gift } = dataItem;
            return (
              <li key={id} className="unordered-list-item">
                {gift}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DynamicList;
