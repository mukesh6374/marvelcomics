import { Button } from "../resuable/button"
import { ClearFilterLayout, FilterTextContainer, FilterTextLayout } from "./assets/style"

interface FilterTextType {
  text: string,
}

const FilterText = ({
  text
}: FilterTextType) => {
  return (
    <FilterTextContainer>
      <FilterTextLayout width="140px">
        {'Explore -'}
      </FilterTextLayout>
      <FilterTextLayout width="fit-content">
        {text}
      </FilterTextLayout>
    </FilterTextContainer>
  )
}

interface FilterType {
  selectedCharacterNames: string[],
  onClearAllFilters: () => void 
}

export const Filter = ({
  selectedCharacterNames,
  onClearAllFilters,
}: FilterType) => {
  let filterText = '';
  if (Array.isArray(selectedCharacterNames) && selectedCharacterNames.length) {
    filterText = selectedCharacterNames.length > 1 ? selectedCharacterNames.join(',') : selectedCharacterNames[0];
  } else {
    return null;
  }

  return (
    <ClearFilterLayout>
      <FilterText
        text={filterText}
      />
      <Button
        text="Clear All Filters"
        onClick={onClearAllFilters}
        maxWidth="15%"
        isButtonVisible={true}
      />
    </ClearFilterLayout>
  )
}