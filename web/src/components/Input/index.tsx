import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null); // imputRef vai dar acesso ao elemento do input da dom
  const [isFocused, setIsFocused] = useState(false); // identifica quando o input está em destaque/foco
  const [isFilled, setIsFilled] = useState(false); // identifica quando o input tá preenchido
  const { fieldName, defaultValue, error, registerField } = useField(name); // useField recebe o nome do campo do input do submit (querySelector)

  // useCallback é uma forma de criar funções que não são renderizadas toda vez que o componente atualiza, pois elas ficam salvas na memória
  // sempre que for criar função dentro de componente, useCallback

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    // function para identificar quando o input perde o foco
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    // assim que o componente for exibido em tela, chama o registerField:
    registerField({
      name: fieldName, // nome do campo
      ref: inputRef.current, // forma de acessar o elemento diretamente
      path: 'value', // é o que vai buscar lá dentro do input
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
