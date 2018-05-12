import variable from './../variables/platform';

export default (variables = variable) => {
    const textAreaTheme = {
        '.underline': {
            borderBottomWidth: variables.borderWidth,
            marginTop: 5,
            borderColor: variables.inputBorderColor
        },
        '.bordered': {
            borderWidth: 1,
            marginTop: 5,
            borderColor: variables.inputBorderColor
        },
        color: variables.textColor,
        paddingLeft: variables.inputPaddingLeft,
        paddingRight: variables.inputPaddingRight,
        fontSize: 15,
        textAlignVertical: 'top'
    };

    return textAreaTheme;
};
