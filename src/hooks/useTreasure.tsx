import { useQuery } from 'react-query';
import { hackathonAxios as axios } from '../apis/hackathonAxios';
import { TreasureKeys } from '../constants/TreasureKey';

interface Treasure {
  latitude: number;
  longitude: number;
}

async function getTreasure(): Promise<Treasure> {
  const { data } = await axios.get('/treasure');
  return data;
}

interface UseTreasure {
  latitude: number;
  longitude: number;
}

export function UseTreasure(): UseTreasure {
  const { data: Treasure } = useQuery<Treasure>(TreasureKeys.all, () =>
    getTreasure()
  );
  return {
    latitude: Treasure?.latitude || 0,
    longitude: Treasure?.longitude || 0
  };
}
