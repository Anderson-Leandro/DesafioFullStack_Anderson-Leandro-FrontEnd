import { useEffect } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export const StyledSelect = ({
	options,
	control,
	name,
	placeholder,
	theme,
	modal,
	defaultValue,
}: any) => {
	const modalStyles = {
		option: (provided: any, state: any) => ({
			...provided,
			borderBottom: "1px solid var(--color-primary)",
			backgroundColor: state.isSelected
				? "#929292"
				: state.isFocused
				? "#DAD8D8"
				: "#F8F9FA",
			padding: 10,
			cursor: "pointer",
			color: theme.colors.placeholder,
		}),
		control: (provided: any, state: any) => ({
			...provided,
			// width: 200,
			height: 40,
			cursor: "pointer",
			// backgroundColor: "var(--color-grey-0)",
			backgroundColor: "#F8F9FA",
			outline: "none",
			borderRadius: "8px",
			border: `2px solid ${
				state.isFocused ? "var(--color-primary)" : "transparent"
			}`,
			boxSizing: "border-box",
			boxShadow: "none",
			":hover": {
				borderColor: "var(--color-primary)",
			},
		}),
		placeholder: (provided: any, state: any) => ({
			...provided,
			color: state.isFocused
				? "var(--color-grey-4)"
				: "var(--color-grey-1)",
		}),
		indicatorsContainer: (provided: any) => ({
			...provided,
			svg: {
				color: "var(--color-primary-focus)",
			},
		}),
		menuList: (provided: any) => ({
			...provided,
			backgroundColor: "var(--color-grey-0)",
			borderRadius: "4px",
			height: 220,
			"::-webkit-scrollbar": {
				width: "6px",
				height: "0px",
			},
			"::-webkit-scrollbar-track": {
				background: "#f1f1f1",
				borderRadius: "4px",
			},
			"::-webkit-scrollbar-thumb": {
				background: "#888",
				borderRadius: "4px",
			},
			"::-webkit-scrollbar-thumb:hover": {
				background: "#555",
			},
		}),
		indicatorSeparator: (provided: any) => ({
			...provided,
			backgroundColor: "var(--color-primary-focus)",
		}),
	};

	const customStyles = {
		option: (provided: any, state: any) => ({
			...provided,
			borderBottom: "1px solid var(--color-primary)",
			backgroundColor: state.isSelected
				? "#929292"
				: state.isFocused
				? theme.colors.hover
				: theme.colors.grey2,
			padding: 10,
			cursor: "pointer",
			color: theme.colors.placeholder,
		}),
		control: (provided: any, state: any) => ({
			...provided,
			// width: 200,
			height: 40,
			cursor: "pointer",
			// backgroundColor: "var(--color-grey-0)",
			backgroundColor: theme.colors.grey2,
			outline: "none",
			borderRadius: "8px",
			border: `2px solid ${
				state.isFocused ? "var(--color-primary)" : "transparent"
			}`,
			boxSizing: "border-box",
			boxShadow: "none",
			":hover": {
				borderColor: "var(--color-primary)",
			},
		}),
		placeholder: (provided: any, state: any) => ({
			...provided,
			color: state.isFocused
				? "var(--color-grey-4)"
				: "var(--color-grey-1)",
		}),
		indicatorsContainer: (provided: any) => ({
			...provided,
			svg: {
				color: "var(--color-primary-focus)",
			},
		}),
		menuList: (provided: any) => ({
			...provided,
			backgroundColor: "var(--color-grey-0)",
			borderRadius: "4px",
			height: 220,
			"::-webkit-scrollbar": {
				width: "6px",
				height: "0px",
			},
			"::-webkit-scrollbar-track": {
				background: "#f1f1f1",
				borderRadius: "4px",
			},
			"::-webkit-scrollbar-thumb": {
				background: "#888",
				borderRadius: "4px",
			},
			"::-webkit-scrollbar-thumb:hover": {
				background: "#555",
			},
		}),
		indicatorSeparator: (provided: any) => ({
			...provided,
			backgroundColor: "var(--color-primary-focus)",
		}),
	};

	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, onBlur } }: any) => {
					return (
						<Select
							styles={modal ? modalStyles : customStyles}
							isClearable
							isSearchable={false}
							defaultValue={options.filter((option: any) => {
								if (option.value === defaultValue) {
									// eslint-disable-next-line react-hooks/rules-of-hooks
									useEffect(() => {
										onChange(option.value);
									}, []);
									return option.label;
								}
							})}
							options={options}
							placeholder={placeholder}
							onChange={(event) => onChange(event?.value)}
							onBlur={onBlur}
						/>
					);
				}}
			/>
		</>
	);
};
