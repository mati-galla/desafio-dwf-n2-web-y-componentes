async function getImages() {
  const imagesResponse = await fetch(
    "https://cdn.contentful.com/spaces/oiq4ay65yvgc/environments/master/entries?access_token=4R9d9L4iiCQQx1NzMOWC0w8envXKhBAndFyql9oOAoU&content_type=imagenes"
  ).then((r) => r.json());

  const imagesAssets = await imagesResponse.includes.Asset;

  const imagesData = await imagesAssets.map((a) => {
    return { title: a.fields.title, url: "https:" + a.fields.file.url };
  });

  return await imagesData;
}

async function getServices() {
  const servicesResponse = await fetch(
    "https://cdn.contentful.com/spaces/oiq4ay65yvgc/environments/master/entries?access_token=4R9d9L4iiCQQx1NzMOWC0w8envXKhBAndFyql9oOAoU&content_type=servicios"
  ).then((r) => r.json());

  const servicesItems = servicesResponse.items;
  const servicesAssets = servicesResponse.includes.Asset;

  const servicesData = await servicesItems.map((item) => {
    const img = servicesAssets.find(
      (a) => item.fields.imagenServicio.sys.id == a.sys.id
    ).fields.file.url;
    return {
      title: item.fields.title,
      description: item.fields.descripcion,
      image: "https:" + img,
    };
  });

  return await servicesData;
}

async function getRepos() {
  const reposResponse = await fetch(
    "https://cdn.contentful.com/spaces/oiq4ay65yvgc/environments/master/entries?access_token=4R9d9L4iiCQQx1NzMOWC0w8envXKhBAndFyql9oOAoU&content_type=work"
  ).then((r) => r.json());

  const reposItems = reposResponse.items;
  const reposAssets = reposResponse.includes.Asset;

  const reposData = await reposItems.map((item) => {
    const img = reposAssets.find((a) => item.fields.image.sys.id == a.sys.id)
      .fields.file.url;
    return {
      title: item.fields.title,
      description: item.fields.description,
      image: "https:" + img,
      url: item.fields.url,
    };
  });

  return await reposData;
}
