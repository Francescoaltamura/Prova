import {useProduct} from '@shopify/hydrogen/client';

export default function ProductOptions() {
  const {options, setSelectedOption, selectedOptions} = useProduct();

  // Display nothing if we only have one product option with one value
  // (typically a product with only a default variant)
  if (options.length <= 1 && options?.values.length <= 1) {
    return null;
  }

  return (
    <>
      {options.map(({name, values}) => {
        return (
          <fieldset key={name} className="my-3">
            <legend className="text-xs text-gray-700 uppercase">{name}</legend>

            <div className="flex items-start flex-wrap gap-1 mt-1">
              {values.map((value) => {
                const checked = selectedOptions[name] === value;
                const id = `option-${name}-${value}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      className="sr-only"
                      type="radio"
                      id={id}
                      name={`option[${name}]`}
                      value={value}
                      checked={checked}
                      onChange={() => setSelectedOption(name, value)}
                    />
                    <div
                      className={`p-2 border cursor-pointer text-xs uppercase w-20 ${
                        checked ? 'bg-gray-900 text-white' : 'text-gray-900'
                      }`}
                    >
                      {value}
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </>
  );
}
