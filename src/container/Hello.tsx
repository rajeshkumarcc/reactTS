import Hello from '../components/Hello';
import * as actions from '../actions/index';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps =  ({ enthusiasmLevel, languageName }: StoreState) =>  {
  return {
    enthusiasmLevel,
    name: languageName,
  };
};

// export default connect(mapStateToProps)(Hello);

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
