import * as React from 'react';
import { getTopDevelopers } from '../../api';
import CustomTable, { IColumn, IRow } from '../../components/table';
import { formatDevelopersData } from '../../utils';

export interface IDevelopersProps {
}

const Developers:React.FunctionComponent<IDevelopersProps> = (props: IDevelopersProps) => {
    const [developers, setDevelopers] = React.useState<IRow[]>([]);
    const [columns, setColumns] = React.useState<IColumn[]>([]);;
    React.useEffect(()=>{
        fillDevelopers();
    }, [])
    const fillDevelopers = async () => {
        const developersFromAPI = await getTopDevelopers();
        const {data, columns} = formatDevelopersData(developersFromAPI);
        setColumns(columns);
        setDevelopers(data);
    }
    const onRowClick = (e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(e.currentTarget.id);
    }
    return (
        <div style={{textAlign:'center'}}>
            <h1>Developers</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CustomTable
                    rows={developers}
                    onRowClick={onRowClick}
                    columns={columns}
                />
            </div>
        </div>
    );
}

export default Developers;