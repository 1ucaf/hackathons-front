import * as React from 'react';
import { getHackathons } from '../../api';
import CustomTable, { IColumn, IRow } from '../../components/table';
import { formatHackathonData } from '../../utils';


export interface IHackathonsProps {
}

const Hackathons:React.FunctionComponent<IHackathonsProps> = (props: IHackathonsProps) => {
    const [hackathons, setHackathons] = React.useState<IRow[]>([]);
    const [columns, setColumns] = React.useState<IColumn[]>([]);;
    React.useEffect(()=>{
        fillHachathons();
    }, [])
    const fillHachathons = async () => {
        const hackathonsFromAPI = await getHackathons();
        const {data, columns} = formatHackathonData(hackathonsFromAPI);
        setColumns(columns);
        setHackathons(data);
    }
    const onRowClick = (e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(e.currentTarget.id);
    }
    return (
        <div style={{textAlign:'center'}}>
            <h1>Hackathons</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CustomTable
                    rows={hackathons}
                    onRowClick={onRowClick}
                    columns={columns}
                    isSelectTable
                />
            </div>
        </div>
    );
}

export default Hackathons;