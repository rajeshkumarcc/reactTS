import * as React from 'react';
import './hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

// Function based component --> used when we need stateless component
// function Hello({name, enthusiasmLevel = 1}: Props){
//   if(enthusiasmLevel <= 0){
//     throw new Error('You could be a little more enthusiastic. :D');
//   }
//
//   return(
//     <div className="hello">
//       <div className="greeting">
//         Hello { name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }
//
// function getExclamationMarks(numChars: number){
//   return Array(numChars + 1).join('!');
// }

class Hello extends React.Component<Props, object> {

    getExclamationMarks(numChars: number) {
      window.console.log(Array(numChars + 1));
      return Array(numChars + 1).join('!');
    }

    render() {
      const {name, enthusiasmLevel = 1} = this.props;

      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }

      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + this.getExclamationMarks(enthusiasmLevel)}
          </div>
        </div>
      );
    }
}

export default Hello;
