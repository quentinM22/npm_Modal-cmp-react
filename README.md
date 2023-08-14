

# @quentinm22/npm-modal-react-cmp

PACKAGE npm-modal-react-cmp




## Installation

Install Package in React project

```bash
  npm i @quentinm22/modal-cmp-react

  yarn add @quentinm22/modal-cmp-react
```
    
### Update

```bash
  npm i @quentinm22/modal-cmp-reactp@latest

  yarn add @quentinm22/modal-cmp-react@latest
```

## Usage/Examples

```javascript
import{ Modal } from "@quentinm22/npm-modal-react-cmp"

function App() {
	const [toggle, setToggle] = useState(false)
	const bgColor = ["10", "61", "97", "0.5"]
	return (
		<>
			<button onClick={() => setToggle(true)}>ShowModal</button>
			<Modal
				toggle={toggle}
				onClose={() => setToggle(false)}
				backgroundColor={bgColor}
				border="#60a3bc"
				title="test"
				content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellat nesciunt a? Beatae dolore adipisci minima rem, quibusdam omnis officiis accusamus eius illo distinctio, perferendis in perspiciatis voluptatem natus quis."
			/>
		</>
	)
}
```


| Props  | Value |
| ------------- | ------------- |
| toggle  | bool  |
| onClose  | function => setState(false)  |
|   backgroundColor  | array => ["r","g","b","a"]  |
| border  | string => color hexa  |
| width  | number  |
| title  | string  |
| content  | string  |

## Authors

- [@quentinM22](https://github.com/quentinM22)

