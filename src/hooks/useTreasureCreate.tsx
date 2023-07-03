import { useMutation, useQueryClient } from 'react-query';
import { hackathonAxios as axios } from '../apis/hackathonAxios';
import { TreasureKeys } from '../constants/TreasureKey';

interface Treasure {
  code: number;
  isSuccess: boolean;
  message: string;
  result: string;
}

async function treasureCreate(treasure: Treasure): Promise<void> {
  await axios.post('/treasure', treasure);
}

interface UseTreasureCreate {
  mutate: () => void;
}

export function UseTreasure(treasure: Treasure): UseTreasureCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => treasureCreate(treasure), {
    onSuccess: () => {
      queryClient.invalidateQueries(TreasureKeys.all);
    }
  });
  return { mutate };
}
