import {formatDateMMDDYYYY} from "../../services/dateTime.helper";
import ToggleButton from '../ToggleButton';
import Link from 'next/link';
export default function({id, property_address, city, state, zip, note_created}) {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <Link href={`/property?id=${id}`}>
                    <a>{property_address} </a>
                </Link>
            </td>
            <td>{city}</td>
            <td>{state}</td>
            <td>{zip}</td>
            <td>{formatDateMMDDYYYY(note_created)}</td>
            <td>Modified</td>
            <td>
                <ToggleButton initialValue={true}/>
            </td>
            <td>Status</td>
        </tr>
    )
}