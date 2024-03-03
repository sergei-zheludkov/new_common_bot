import type { FeedbackFilesCreateDto } from '@common_bot/api';
import type { UrbanMediaGroupEvent } from '../types';

const getFilesDataToPost = (event: UrbanMediaGroupEvent) => {
  console.log('getFilesDataToPost - event.files:', event.files);

  const result = event.files
    .reduce<FeedbackFilesCreateDto[]>(
      (acc, file) => (file.id
        ? [...acc, { id: file.id, type: file.type as FeedbackFilesCreateDto.type }]
        : acc
      ),
      [],
    );

  console.log('getFilesDataToPost - result:', result);
  return result;
};

export { getFilesDataToPost };
