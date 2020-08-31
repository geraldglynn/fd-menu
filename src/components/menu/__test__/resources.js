import { fromJS } from 'immutable'

export const mockMenuSectionBase = fromJS({
  MenuSectionId: 123,
  Name: 'Section',
  Description: 'This is a long description about the Menu Section',
  IsDeleted: false,
  DisplayOrder: 1,
  ImageName: '2T7TarPTQehVDxIYmoO84wDrOg.jpg',
  ImageUrl: 'https://flipdish.imgix.net/2T7TarPTQehVDxIYmoO84wDrOg.jpg',
  CellAspectRatio: 4,
  MenuItems: []
})

export const mockMenuItemBase = (fromJS({
  MenuItemId: 1234,
  Name: 'Item',
  Description: 'This is a long description about the Menu Item',
  ImageName: '2T7TarPTQehVDxIYmoO84wDrOg.jpg',
  ImageUrl: 'https://flipdish.imgix.net/2T7TarPTQehVDxIYmoO84wDrOg.jpg',
  CellAspectRatio: 4,
  Price: 5.99,
  Alcohol: false,
  isAvailable: true,
  menuItemOptionSets: [],
}))

