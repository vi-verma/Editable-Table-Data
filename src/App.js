
import 'antd/dist/reset.css';
import EditableRowTable from './EditableRowTable';
import EditableTable from './EditableTable';
import TypeAhead from './TypeAhead';


const App = () => {

  return(
    <div style={{ margin:'auto'}}>
      <h2>Editable Table With AutoComplete and input field</h2>
      <EditableTable />

      <div >
      <h2>Editable Table With input field after clicking Edit button</h2>

        <EditableRowTable />
      </div>
    </div>
  );
}
  

export default App;
