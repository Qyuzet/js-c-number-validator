# Telephone Number Validator

This web application validates whether a given phone number meets the format for a valid US telephone number. It provides an interactive interface where users can enter a phone number and get immediate validation feedback.

## Features

- **Validation for US Phone Numbers**: Checks if the input conforms to standard US phone number formats (with or without country code).
- **Interactive UI**: Users can validate and clear the input with ease.
- **Detailed Feedback**: Displays whether the input number is valid or invalid based on regex pattern matching.

## Demo

A live demo can be found [here](https://yourusername.github.io/telephone-number-validator/).

## Getting Started

### Prerequisites

To use this project locally, you need:
- A modern web browser.
- A code editor (e.g., VSCode) if you want to make changes.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/telephone-number-validator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd telephone-number-validator
   ```

3. Open `index.html` in your browser to use the validator.

## Usage

1. Enter a US phone number in the input field.
2. Click the **Check** button to validate the phone number.
3. Use the **Clear** button to reset the input and output.

## Code Overview

### HTML

- The structure of the interface, including an input field, buttons for validation, and a results display.

### CSS

- Styles are defined in `styles.css` for a clean and responsive design, with a dark theme and highlighted card interface.

### JavaScript

- Core functionality is contained in `script.js`.
- Functions include:
  - **`validatePhoneNumber()`**: Validates the entered phone number against standard US formats.
  - Event listeners for the **Check** and **Clear** buttons.

## Example

- **Input**: `(123) 456-7890`
- **Output**: Valid US number: `(123) 456-7890`

## Project Structure

```
telephone-number-validator/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling
└── script.js        # JavaScript for functionality
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
