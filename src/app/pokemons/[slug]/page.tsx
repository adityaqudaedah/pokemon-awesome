import ClientPokemonDetail from "./client-component";

const PokemonDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return <ClientPokemonDetail slug={slug} />;
};

export default PokemonDetail;
