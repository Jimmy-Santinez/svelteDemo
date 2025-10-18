<script>
  import { getModelById } from "../../../lib/api/mockModels.js";
  import ModelDetails from "../../../lib/components/ModelDetails.svelte";
  import BrandList from "../../../lib/components/BrandList.svelte";

  export let params;
  const modelo = getModelById(params.id);
</script>

<ModelDetails {modelo} />
<BrandList {modelo} />
