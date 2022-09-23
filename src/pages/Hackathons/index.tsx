import * as React from 'react';
import { getDevelopers, getHackathons } from '../../api';
import CustomTable, { IColumn, IRow } from '../../components/table';
import { SelectedHackathonContext } from '../../contexts/Hackathons/SelectedHackathonContext';
import { ModalContext } from '../../contexts/Modal';
import { IId } from '../../dtos/hackathons';
import { IDeveloper } from '../../dtos/developer.dto';
import { formatHackathonData } from '../../utils';


export interface IHackathonsProps {
}

const Hackathons:React.FunctionComponent<IHackathonsProps> = (props: IHackathonsProps) => {
    const modalContext = React.useContext(ModalContext)
    const selectedHackathonContext = React.useContext(SelectedHackathonContext);

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
    const onRowClick = async (e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        const id = e.currentTarget.id;
        const name = id.slice(0, id.indexOf(':'));
        const value = id.slice(id.indexOf(':') + 2);
        const Id:IId = {
            name: name,
            value: value,
        }
        const developers:IDeveloper[] = await getDevelopers(Id);
        let count = 1;
        let message = <>
            {
                developers.map( d => {
                    return <>#${count++}: ${d.name.first}, ${d.name.last} <br/> </>
                })
            }
        </>;
        modalContext.setModalProps({
            show:true,
            message: message,
            title: "Mejores 10 desarrolladores"
        })
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