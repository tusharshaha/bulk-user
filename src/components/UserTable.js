import axios from "axios";
import MaterialTable from "material-table";
import { useQuery } from "react-query";

const getBulkUser = async () => await axios.post("http://demo2211087.mockable.io/mock");

const UserTable = () => {
    const { isLoading, data } = useQuery("bulk-user", getBulkUser)
    const users = data.data.companies;
    return (
        <div>
            <MaterialTable
                data={users}
                title="Users"
                actions={[]}
                columns={
                    [
                        { title: 'User Id', defaultSort: 'desc', field: 'userId', customSort: (a, b) => a.tableData.id < b.tableData.id ? -1 : 1 },
                        { title: 'Full Name', field: 'userFullName' },
                        { title: 'Username', field: 'userName' },
                        { title: 'Mobile', field: 'userMobile' },
                        { title: 'Email', field: 'userEmail' },
                        { title: "Role", field: "userRole" },
                        { title: "Active", render: (rowData) => rowData.isActive === true ? "Yes" : "No" },

                    ]
                }
                options={{
                    search: true,
                    actionsColumnIndex: 0,
                    headerStyle: {
                        backgroundColor: '#EE4B46',
                        color: '#fff',
                    }

                }}
            ></MaterialTable>
        </div>
    );
};

export default UserTable;