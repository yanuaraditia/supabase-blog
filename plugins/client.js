import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://wafybebqjsjhlpouawek.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODU5ODE2NCwiZXhwIjoxOTU0MTc0MTY0fQ.rKQNpvnK9ab2zTSNDm3KNklp68py60ezbQF1hynakww"
)

export default (_, inject) => {
  inject('supabase', supabase)
}
