import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Paginator(props) {
    let active = parseInt(props.activePage) || 1;
    let items = [];
    let displayTotal = parseInt(props.displayTotal);
    const handleClick = (e) => {
        e.preventDefault();
        const page = e.target.getAttribute("pagenumber");
        if (active !== page || active !== 0 || active !== items.length) props.updatePropList(page);
    };

    for (let number = 1; number <= props.pages; number++) {
        items.push(
            <Pagination.Item key={number}
                             active={number === active}
                             pagenumber={number}
                             onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const handleDropdown = (e) => {
        const total = e.target.getAttribute("total");
        debugger;
        props.updateDisplayTotal(total)
    };

    return(
        <div className="Paginator">
            <Pagination>
                <Pagination.First onClick={handleClick} pagenumber={1} />
                <Pagination.Prev onClick={handleClick} pagenumber={(active - 1)} />
                {items}
                <Pagination.Next onClick={handleClick} pagenumber={(active + 1)} />
                <Pagination.Last onClick={handleClick} pagenumber={items.length} />
            </Pagination>

            {/*<Dropdown>*/}
            {/*    <Dropdown.Toggle variant="success" id="dropdown-basic">*/}
            {/*        {displayTotal}*/}
            {/*    </Dropdown.Toggle>*/}

            {/*    <Dropdown.Menu>*/}
            {/*        <Dropdown.Item onClick={handleDropdown} total={10}>10</Dropdown.Item>*/}
            {/*        <Dropdown.Item onClick={handleDropdown} total={25}>25</Dropdown.Item>*/}
            {/*        <Dropdown.Item onClick={handleDropdown} total={50}>50</Dropdown.Item>*/}
            {/*        <Dropdown.Item onClick={handleDropdown} total={100}>100</Dropdown.Item>*/}
            {/*    </Dropdown.Menu>*/}
            {/*</Dropdown>*/}
            <style>{`
                .Paginator{
                    display: flex;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}