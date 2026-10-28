export type Foods = {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: Product[];
  skip: number;
};

export type Product = {
  _id: string;
  _keywords: string[];
  added_countries_tags: unknown[];
  additives_n?: number;
  additives_original_tags?: string[];
  additives_tags?: string[];
  allergens: string;
  allergens_from_user?: string;
  allergens_hierarchy: string[];
  allergens_lc: AllergensLc;
  allergens_tags: string[];
  amino_acids_prev_tags?: unknown[];
  amino_acids_tags?: unknown[];
  brands?: string;
  brands_tags?: string[];
  categories?: string;
  categories_hierarchy?: string[];
  categories_lc?: AllergensLc;
  categories_properties: CategoriesProperties;
  categories_properties_tags: string[];
  categories_tags?: string[];
  category_properties?: CategoryProperties;
  checkers_tags: string[];
  ciqual_food_name_tags?: string[];
  cities_tags?: unknown[];
  code: string;
  codes_tags: string[];
  compared_to_category?: string;
  complete: number;
  completeness: number;
  correctors_tags: string[];
  countries: string;
  countries_beforescanbot?: string;
  countries_hierarchy: string[];
  countries_lc: AllergensLc;
  countries_tags: string[];
  created_t: number;
  creator: string;
  data_quality_bugs_tags: unknown[];
  data_quality_completeness_tags?: string[];
  data_quality_dimensions?: DataQualityDimensions;
  data_quality_errors_tags: string[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_tags: string[];
  debug_param_sorted_langs?: string[];
  ecoscore_data: EcoscoreData;
  ecoscore_grade: EcoscoreGrade;
  ecoscore_tags: EcoscoreGrade[];
  editors?: string[];
  editors_tags: string[];
  emb_codes?: string;
  emb_codes_20141016?: string;
  emb_codes_hierarchy?: string[];
  emb_codes_lc?: AllergensLc;
  emb_codes_orig?: string;
  emb_codes_tags?: string[];
  entry_dates_tags: string[];
  estimate_ingredients_percent_service?: string;
  expiration_date?: string;
  food_groups?: string;
  food_groups_tags: string[];
  forest_footprint_2026?: ForestFootprint2026;
  generic_name?: string;
  generic_name_ar?: GenericNameAr;
  generic_name_en?: string;
  generic_name_es?: string;
  generic_name_fr?: string;
  id: string;
  image_front_small_url?: string;
  image_front_thumb_url?: string;
  image_front_url?: string;
  image_small_url?: string;
  image_thumb_url?: string;
  image_url?: string;
  images: Images;
  informers_tags: string[];
  ingredients?: ProductIngredient[];
  ingredients_analysis?: IngredientsAnalysis;
  ingredients_analysis_tags?: string[];
  ingredients_debug?: Array<null | string>;
  ingredients_from_or_that_may_be_from_palm_oil_n?: number;
  ingredients_from_palm_oil_n?: number;
  ingredients_from_palm_oil_tags?: unknown[];
  ingredients_hierarchy?: string[];
  ingredients_ids_debug?: string[];
  ingredients_lc?: AllergensLc;
  ingredients_n?: number | string;
  ingredients_n_tags?: string[];
  ingredients_non_nutritive_sweeteners_n?: number;
  ingredients_original_tags?: string[];
  ingredients_percent_analysis?: number;
  ingredients_sweeteners_n?: number;
  ingredients_tags?: string[];
  ingredients_text?: string;
  ingredients_text_ar?: string;
  ingredients_text_debug?: string;
  ingredients_text_debug_tags?: unknown[];
  ingredients_text_en?: string;
  ingredients_text_es?: string;
  ingredients_text_fr?: string;
  ingredients_text_with_allergens?: string;
  ingredients_text_with_allergens_ar?: string;
  ingredients_text_with_allergens_en?: string;
  ingredients_text_with_allergens_es?: string;
  ingredients_text_with_allergens_fr?: string;
  ingredients_that_may_be_from_palm_oil_n?: number;
  ingredients_that_may_be_from_palm_oil_tags?: unknown[];
  ingredients_with_specified_percent_n?: number;
  ingredients_with_specified_percent_sum?: number;
  ingredients_with_unspecified_percent_n?: number;
  ingredients_with_unspecified_percent_sum?: number;
  ingredients_without_ciqual_codes?: string[];
  ingredients_without_ciqual_codes_n?: number;
  ingredients_without_ecobalyse_ids?: string[];
  ingredients_without_ecobalyse_ids_n?: number;
  interface_version_created?: string;
  interface_version_modified: string;
  known_ingredients_n?: number;
  labels?: string;
  labels_hierarchy?: string[];
  labels_lc?: AllergensLc;
  labels_tags?: string[];
  lang: AllergensLc;
  languages: { [key: string]: number };
  languages_codes: LanguagesCodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  last_updated_t: number;
  lc: AllergensLc;
  link?: string;
  main_countries_tags: unknown[];
  manufacturing_places?: string;
  manufacturing_places_hierarchy?: string[];
  manufacturing_places_lc?: AllergensLc;
  manufacturing_places_tags?: string[];
  max_imgid?: number | string;
  minerals_prev_tags?: unknown[];
  minerals_tags?: unknown[];
  misc_tags: string[];
  nova_group_debug: string;
  nova_group_error?: string;
  nova_groups_tags: NovaGroupsTag[];
  nucleotides_prev_tags?: unknown[];
  nucleotides_tags?: unknown[];
  nutrient_levels: NutrientLevels;
  nutrient_levels_tags: string[];
  nutriments: Nutriments;
  nutriscore: { [key: string]: Nutriscore };
  nutriscore_2021_tags: EcoscoreGrade[];
  nutriscore_2023_tags: EcoscoreGrade[];
  nutriscore_data?: NutriscoreDataClass;
  nutriscore_grade: EcoscoreGrade;
  nutriscore_score?: number;
  nutriscore_score_opposite?: number;
  nutriscore_tags: EcoscoreGrade[];
  nutriscore_version: string;
  nutrition_data: "on";
  nutrition_data_per: NutritionDataP;
  nutrition_data_prepared_per: NutritionDataP;
  nutrition_grade_fr: EcoscoreGrade;
  nutrition_grades: EcoscoreGrade;
  nutrition_grades_tags: EcoscoreGrade[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients?: number;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value?: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients?: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value?: number;
  obsolete?: string;
  obsolete_since_date?: string;
  origin?: OriginEnEnum;
  origin_ar?: string;
  origin_en?: OriginEnEnum;
  origin_es?: string;
  origin_fr?: OriginEnEnum;
  origins?: string;
  origins_hierarchy?: OriginsHierarchyElement[];
  origins_lc?: AllergensLc;
  origins_tags?: OriginsHierarchyElement[];
  other_nutritional_substances_tags?: unknown[];
  packaging?: string;
  packaging_hierarchy?: string[];
  packaging_lc?: string;
  packaging_materials_tags: string[];
  packaging_old?: string;
  packaging_old_before_taxonomization?: string;
  packaging_recycling_tags: string[];
  packaging_shapes_tags: string[];
  packaging_tags?: string[];
  packaging_text?: PackagingText;
  packaging_text_ar?: PackagingTextAr;
  packaging_text_en?: string;
  packaging_text_es?: string;
  packaging_text_fr?: PackagingText;
  packagings: ProductPackaging[];
  packagings_complete?: number;
  packagings_materials: PackagingsMaterials;
  packagings_n?: number;
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags?: string[];
  product?: Grades;
  product_name?: string;
  product_name_ar?: string;
  product_name_en?: string;
  product_name_es?: string;
  product_name_fr?: string;
  product_quantity?: number;
  product_quantity_unit?: QuantityUnit;
  product_type: "food";
  purchase_places?: string;
  purchase_places_hierarchy?: string[];
  purchase_places_lc?: AllergensLc;
  purchase_places_tags?: string[];
  quantity?: string;
  removed_countries_tags: unknown[];
  rev: number;
  scans_n?: number;
  schema_version: number;
  selected_images?: SelectedImages;
  serving_quantity?: number;
  serving_quantity_unit?: QuantityUnit;
  serving_size?: string;
  sortkey?: number;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores?: string;
  stores_hierarchy?: string[];
  stores_lc?: AllergensLc;
  stores_tags?: string[];
  taxonomies_enhancer_tags?: string[];
  teams?: string;
  teams_tags?: string[];
  traces: string;
  traces_from_user?: string;
  traces_hierarchy: string[];
  traces_lc: AllergensLc;
  traces_tags: string[];
  unique_scans_n?: number;
  unknown_ingredients_n?: number | string;
  unknown_nutrients_tags?: unknown[];
  update_key?: string;
  url: string;
  vitamins_prev_tags?: string[];
  vitamins_tags?: string[];
  weighers_tags: string[];
  ecoscore_score?: number;
  environment_impact_level?: string;
  environment_impact_level_tags?: unknown[];
  environmental_impact?: EnvironmentalImpact;
  last_modified_by_client?: string;
  completed_t?: number;
  "fruits-vegetables-nuts_100g_estimate"?: number;
  generic_name_de?: string;
  ingredients_text_de?: string;
  ingredients_text_with_allergens_de?: string;
  nova_group?: number;
  nova_groups?: string;
  nova_groups_markers?: { [key: string]: Array<string[]> };
  nutriments_estimated?: { [key: string]: number };
  origin_de?: string;
  packaging_text_de?: string;
  product_name_de?: string;
  allergens_from_ingredients?: string;
  generic_name_xx?: string;
  ingredients_text_with_allergens_xx?: string;
  ingredients_text_xx?: string;
  origin_xx?: string;
  packaging_text_xx?: string;
  product_name_xx?: string;
  traces_from_ingredients?: string;
  no_nutrition_data?: "on";
  nutrition_score_warning_no_fiber?: number;
  abbreviated_product_name?: string;
  abbreviated_product_name_fr?: string;
  abbreviated_product_name_fr_imported?: string;
  carbon_footprint_percent_of_known_ingredients?: number;
  checkers?: unknown[];
  conservation_conditions?: string;
  conservation_conditions_fr?: string;
  conservation_conditions_fr_imported?: string;
  correctors?: unknown[];
  customer_service?: string;
  customer_service_fr?: string;
  customer_service_fr_imported?: string;
  data_sources_imported?: string;
  debug_tags?: string[];
  generic_name_fr_imported?: string;
  generic_name_it?: string;
  generic_name_ko?: string;
  generic_name_nl?: string;
  generic_name_ro?: string;
  informers?: string[];
  ingredients_text_fr_imported?: string;
  ingredients_text_it?: string;
  ingredients_text_ko?: string;
  ingredients_text_nb?: string;
  ingredients_text_nl?: string;
  ingredients_text_ro?: string;
  ingredients_text_with_allergens_it?: string;
  ingredients_text_with_allergens_nb?: string;
  ingredients_text_with_allergens_nl?: string;
  ingredients_text_with_allergens_ro?: string;
  lang_imported?: AllergensLc;
  lc_imported?: AllergensLc;
  nutrition_data_per_imported?: NutritionDataP;
  nutrition_data_prepared_per_imported?: NutritionDataP;
  nutrition_score_warning_nutriments_estimated?: number;
  obsolete_imported?: string;
  origin_fr_imported?: OriginEnEnum;
  origin_it?: string;
  origin_ko?: string;
  origin_nl?: string;
  origin_ro?: string;
  other_nutritional_substances_prev_tags?: unknown[];
  owner?: string;
  owner_fields?: { [key: string]: number };
  owner_imported?: string;
  owners_tags?: string;
  packaging_text_it?: string;
  packaging_text_ko?: string;
  packaging_text_nl?: string;
  packaging_text_ro?: string;
  packagings_materials_main?: string;
  photographers?: unknown[];
  product_name_fr_imported?: string;
  product_name_it?: string;
  product_name_ko?: string;
  product_name_nl?: string;
  product_name_ro?: string;
  quantity_imported?: string;
  sources?: Source[];
  sources_fields?: SourcesFields;
  weighters_tags?: string[];
  generic_name_ay?: string;
  ingredients_text_ay?: string;
  origin_ay?: string;
  packaging_text_ay?: string;
  product_name_ay?: string;
  ingredients_text_fr_ocr_1650450332?: string;
  ingredients_text_fr_ocr_1650450332_result?: string;
  checked?: "on";
  last_check_dates_tags?: string[];
  last_checked_t?: number;
  last_checker?: string;
  ingredients_text_ar_ocr_1713559773?: string;
  ingredients_text_ar_ocr_1713559773_result?: string;
  ingredients_text_en_ocr_1713559773?: string;
  ingredients_text_en_ocr_1713559773_result?: string;
  generic_name_bg?: string;
  generic_name_debug_tags?: unknown[];
  generic_name_hu?: string;
  generic_name_pt?: string;
  generic_name_sr?: string;
  generic_name_sv?: string;
  generic_name_tr?: string;
  ingredients_text_bg?: string;
  ingredients_text_en_ocr_1679221304?: string;
  ingredients_text_en_ocr_1679221304_result?: string;
  ingredients_text_hu?: string;
  ingredients_text_pt?: string;
  ingredients_text_sr?: string;
  ingredients_text_sv?: string;
  ingredients_text_tr?: string;
  ingredients_text_with_allergens_bg?: string;
  ingredients_text_with_allergens_hu?: string;
  ingredients_text_with_allergens_pt?: string;
  ingredients_text_with_allergens_sr?: string;
  ingredients_text_with_allergens_sv?: string;
  ingredients_text_with_allergens_tr?: string;
  origin_bg?: string;
  origin_hu?: string;
  origin_pt?: string;
  origin_sr?: string;
  origin_sv?: string;
  origin_tr?: string;
  packaging_text_bg?: string;
  packaging_text_hu?: string;
  packaging_text_pt?: string;
  packaging_text_sr?: string;
  packaging_text_sv?: string;
  packaging_text_tr?: string;
  product_name_bg?: string;
  product_name_hu?: string;
  product_name_pl?: string;
  product_name_pt?: string;
  product_name_sr?: string;
  product_name_sv?: string;
  product_name_tr?: string;
  nutrition_score_warning_no_fruits_vegetables_nuts?: number;
  generic_name_fi?: string;
  generic_name_ja?: string;
  generic_name_nb?: string;
  generic_name_pl?: string;
  grades?: Grades;
  ingredients_text_fi?: string;
  ingredients_text_ja?: string;
  ingredients_text_pl?: string;
  ingredients_text_with_allergens_fi?: string;
  ingredients_text_with_allergens_ja?: string;
  ingredients_text_with_allergens_pl?: string;
  origin_fi?: string;
  origin_ja?: string;
  origin_nb?: string;
  origin_pl?: string;
  packaging_text_fi?: string;
  packaging_text_ja?: string;
  packaging_text_nb?: string;
  packaging_text_pl?: string;
  product_name_fi?: string;
  product_name_ja?: string;
  product_name_nb?: string;
  scores?: Grades;
};

export type AllergensLc = "es" | "en" | "ar" | "fr";

export type CategoriesProperties = {
  "agribalyse_food_code:en"?: string;
  "agribalyse_proxy_food_code:en"?: string;
  "ciqual_food_code:en"?: string;
};

export type CategoryProperties = {
  "ciqual_food_name:en"?: string;
  "ciqual_food_name:fr"?: string;
};

export type DataQualityDimensions = {
  accuracy: Accuracy;
  completeness: Completeness;
};

export type Accuracy = {
  overall: string;
};

export type Completeness = {
  general_information: string;
  ingredients: string;
  nutrition: string;
  overall: string;
  packaging: string;
};

export type EcoscoreData = {
  adjustments: Adjustments;
  environmental_score_not_applicable_for_category?: string;
  grade: EcoscoreGrade;
  missing: Missing;
  scores: { [key: string]: number };
  status: Status;
  agribalyse?: Agribalyse;
  grades?: { [key: string]: EcoscoreGrade };
  missing_data_warning?: number;
  previous_data?: PreviousData;
  score?: number;
  missing_key_data?: number;
  missing_agribalyse_match_warning?: number;
};

export type Adjustments = {
  origins_of_ingredients: OriginsOfIngredients;
  packaging: AdjustmentsPackaging;
  production_system: ProductionSystem;
  threatened_species: ThreatenedSpecies;
};

export type OriginsOfIngredients = {
  aggregated_origins: AggregatedOrigin[];
  epi_score: number;
  epi_value: number;
  origins_from_categories: OriginsHierarchyElement[];
  origins_from_origins_field: OriginsHierarchyElement[];
  transportation_score: number;
  transportation_scores: { [key: string]: number };
  transportation_value: number;
  transportation_values: { [key: string]: number };
  value: number;
  values: { [key: string]: number };
  warning?: string;
};

export type AggregatedOrigin = {
  epi_score: number;
  origin: OriginsHierarchyElement;
  percent: number;
  transportation_score: number;
};

export type OriginsHierarchyElement =
  | "en:unknown"
  | "en:morocco"
  | "en:france"
  | "en:united-kingdom"
  | "fr:Saint-Martin de Gurson";

export type AdjustmentsPackaging = {
  non_recyclable_and_non_biodegradable_materials?: number;
  packagings?: PackagingPackaging[];
  score?: number;
  value: number;
  warning?: string;
};

export type PackagingPackaging = {
  environmental_score_material_score: number;
  environmental_score_shape_ratio: number;
  food_contact?: number;
  material: string;
  non_recyclable_and_non_biodegradable?: FromPalmOil;
  shape: string;
  material_shape?: string;
  number_of_units?: number;
  quantity_per_unit?: string;
  quantity_per_unit_unit?: string;
  quantity_per_unit_value?: number;
  recycling?: string;
  weight_measured?: number;
};

export type FromPalmOil = "maybe" | "no" | "yes";

export type ProductionSystem = {
  labels: unknown[];
  value: number;
  warning: "no_label";
};

export type ThreatenedSpecies = {
  warning?: string;
};

export type Agribalyse = {
  agribalyse_food_code?: string;
  co2_agriculture?: number;
  co2_consumption?: number;
  co2_distribution?: number;
  co2_packaging?: number;
  co2_processing?: number;
  co2_total?: number;
  co2_transportation?: number;
  code?: string;
  dqr?: string;
  ef_agriculture?: number;
  ef_consumption?: number;
  ef_distribution?: number;
  ef_packaging?: number;
  ef_processing?: number;
  ef_total?: number;
  ef_transportation?: number;
  is_beverage?: number;
  name_en?: string;
  name_fr?: string;
  score?: number;
  version?: Version;
  agribalyse_proxy_food_code?: string;
  warning?: string;
};

export type Version = "3.2" | "3.1.1";

export type EcoscoreGrade =
  | "a"
  | "d"
  | "b"
  | "c"
  | "e"
  | "unknown"
  | "not-applicable";

export type Missing = {
  labels: number;
  origins?: number;
  packagings?: number;
  agb_category?: number;
  categories?: number;
  ingredients?: number;
};

export type PreviousData = {
  agribalyse: Agribalyse;
  grade: EcoscoreGrade;
  score: number;
};

export type Status = "unknown" | "known";

export type EnvironmentalImpact = {
  ecobalyse_input: EcobalyseInput;
  ecobalyse_request: EcobalyseRequest;
  ecobalyse_skip_reason?: string;
  ecobalyse_skipped?: number;
};

export type EcobalyseInput = {
  distribution: string;
  ingredients: EcobalyseInputIngredient[];
  ingredients_coverage_percent: number;
  packaging: EcobalyseInputPackaging[];
  reference_quantity?: number;
  reference_quantity_source?: string;
  reference_quantity_unit?: QuantityUnit;
};

export type EcobalyseInputIngredient = {
  ecobalyse_name: string;
  id: string;
  mass: number;
  name: string;
};

export type EcobalyseInputPackaging = {
  category: string;
  id: string;
  name: string;
  name_fr: string;
};

export type QuantityUnit = "ml" | "g";

export type EcobalyseRequest = {
  data: EcobalyseRequestData;
  url: string;
};

export type EcobalyseRequestData = {
  distribution: string;
  ingredients: DataIngredient[];
  packaging: DataPackaging[];
};

export type DataIngredient = {
  id: string;
  mass: number;
};

export type DataPackaging = {
  amount: number;
  id: string;
};

export type ForestFootprint2026 = {
  grade: EcoscoreGrade;
  primary_ingredients?: PrimaryIngredients;
  summary: string;
  total_footprint_per_kg?: number;
};

export type PrimaryIngredients = {
  "en:cocoa"?: EnCocoa;
};

export type EnCocoa = {
  footprint_per_kg: number;
  grade: EcoscoreGrade;
  ingredients: EnCocoaIngredient[];
};

export type EnCocoaIngredient = {
  equivalence_ingredient: number;
  equivalence_ingredient_category: number;
  footprint_per_kg: number;
  ingredient_category_id: string;
  ingredient_id: string;
  origin_footprint: number;
  origin_id: OriginsHierarchyElement;
  percent: number;
  primary_ingredient_id: string;
  risk_factor: number;
  transformation_factor: number;
};

export type GenericNameAr = "" | "حليب طري مبستر نصف دسم";

export type Grades = {};

export type Images = {
  "2"?: The1;
  "3"?: The1;
  "4"?: The1;
  "6"?: The1;
  "7"?: The1;
  "8"?: The1;
  "9"?: The1;
  "10"?: The1;
  "11"?: The1;
  "12"?: The1;
  "13"?: The1;
  "14"?: The1;
  "15"?: The1;
  "16"?: The1;
  "17"?: The1;
  "18"?: The1;
  "19"?: The1;
  "20"?: The1;
  "21"?: The1;
  "22"?: The1;
  "23"?: The114;
  "24"?: The1;
  "26"?: The1;
  "27"?: The1;
  "28"?: The1;
  "29"?: The1;
  "30"?: The114;
  "31"?: The1;
  "32"?: The1;
  "33"?: The1;
  "34"?: The1;
  "35"?: The114;
  "36"?: The114;
  "37"?: The114;
  "38"?: The1;
  "39"?: The1;
  "40"?: The1;
  "41"?: The114;
  "42"?: The114;
  "43"?: The1;
  "44"?: The1;
  "45"?: The114;
  "46"?: The114;
  "47"?: The1;
  "48"?: The1;
  front_ar?: FrontAr;
  front_en?: FrontAr;
  front_es?: FrontAr;
  front_fr?: FrontAr;
  ingredients_ar?: IngredientsAr;
  ingredients_es?: FrontBg;
  ingredients_fr?: IngredientsAr;
  nutrition_ar?: FrontAr;
  nutrition_es?: FrontFi;
  nutrition_fr?: IngredientsAr;
  packaging_ar?: NutritionJa;
  packaging_en?: IngredientsAr;
  packaging_es?: NutritionJa;
  packaging_fr?: IngredientsAr;
  "1"?: The1;
  "5"?: The1;
  "25"?: The1;
  ingredients_en?: IngredientsAr;
  nutrition_en?: FrontAr;
  front_xx?: FrontBg;
  "50"?: The1;
  "52"?: The1;
  "54"?: The1;
  "55"?: The1;
  "56"?: The116;
  "57"?: The1;
  "59"?: The1;
  "60"?: The1;
  "61"?: The1;
  "62"?: The1;
  "63"?: The1;
  "64"?: The1;
  "65"?: The1;
  "66"?: The1;
  "69"?: The1;
  "70"?: The1;
  "71"?: The1;
  "72"?: The1;
  "73"?: The1;
  "74"?: The1;
  "76"?: The1;
  "77"?: The1;
  "78"?: The1;
  "79"?: The116;
  "80"?: The1;
  "81"?: The1;
  "82"?: The1;
  "83"?: The1;
  "84"?: The1;
  "85"?: The1;
  "88"?: The116;
  "89"?: The1;
  "90"?: The1;
  "91"?: The1;
  "92"?: The1;
  "93"?: The1;
  "94"?: The1;
  "95"?: The1;
  "97"?: The1;
  "98"?: The1;
  "99"?: The1;
  "100"?: The1;
  "102"?: The1;
  "103"?: The1;
  "106"?: The1;
  "107"?: The1;
  "108"?: The1;
  "109"?: The1;
  "110"?: The1;
  "111"?: The1;
  "112"?: The1;
  "113"?: The1;
  "116"?: The116;
  "120"?: The116;
  "121"?: The116;
  "122"?: The116;
  "123"?: The116;
  "124"?: The116;
  "125"?: The116;
  "126"?: The116;
  "129"?: The116;
  "131"?: The116;
  "132"?: The116;
  "133"?: The116;
  "134"?: The116;
  "135"?: The116;
  "136"?: The116;
  "137"?: The116;
  "139"?: The114;
  "140"?: The114;
  "142"?: The114;
  "143"?: The114;
  "144"?: The114;
  "172"?: The114;
  "173"?: The114;
  "174"?: The114;
  "175"?: The114;
  "176"?: The114;
  "177"?: The114;
  "178"?: The114;
  "179"?: The114;
  "180"?: The114;
  "181"?: The114;
  "182"?: The114;
  "183"?: The114;
  "186"?: The114;
  "187"?: The114;
  "188"?: The114;
  "189"?: The114;
  "190"?: The114;
  "191"?: The114;
  "192"?: The114;
  "193"?: The114;
  "195"?: The114;
  "196"?: The114;
  "198"?: The114;
  "199"?: The114;
  "200"?: The114;
  "201"?: The114;
  "202"?: The114;
  "203"?: The114;
  "205"?: The114;
  "208"?: The114;
  "209"?: The114;
  "211"?: The114;
  "212"?: The114;
  "213"?: The114;
  "214"?: The114;
  "215"?: The114;
  "216"?: The114;
  "217"?: The114;
  "218"?: The114;
  "219"?: The114;
  "220"?: The114;
  "221"?: The114;
  "223"?: The114;
  "225"?: The114;
  "226"?: The114;
  "227"?: The116;
  "228"?: The116;
  "229"?: The114;
  "230"?: The114;
  "231"?: The114;
  "232"?: The114;
  "233"?: The114;
  "234"?: The114;
  "235"?: The114;
  "236"?: The116;
  "237"?: The114;
  "238"?: The114;
  "239"?: The116;
  "240"?: The114;
  "241"?: The114;
  "243"?: The114;
  "244"?: The114;
  "248"?: The114;
  "249"?: The114;
  "250"?: The114;
  "251"?: The114;
  "253"?: The114;
  "254"?: The114;
  "255"?: The114;
  "256"?: The114;
  "257"?: The114;
  "258"?: The114;
  "260"?: The114;
  "261"?: The114;
  "262"?: The114;
  "263"?: The114;
  "264"?: The114;
  "265"?: The114;
  "266"?: The114;
  "267"?: The114;
  "268"?: The114;
  "269"?: The114;
  "270"?: The114;
  "272"?: The114;
  "273"?: The114;
  "276"?: The114;
  "279"?: The114;
  "280"?: The114;
  "281"?: The114;
  "282"?: The114;
  "284"?: The114;
  "285"?: The114;
  "286"?: The114;
  "287"?: The114;
  "288"?: The114;
  "289"?: The114;
  "291"?: The114;
  "293"?: The114;
  "294"?: The114;
  "295"?: The114;
  "297"?: The114;
  "299"?: The114;
  "301"?: The114;
  "304"?: The114;
  "305"?: The114;
  "306"?: The114;
  "307"?: The114;
  "308"?: The114;
  "309"?: The114;
  "310"?: The114;
  "311"?: The114;
  "312"?: The114;
  "313"?: The114;
  "314"?: The114;
  "315"?: The114;
  "316"?: The114;
  "317"?: The114;
  "318"?: The114;
  "319"?: The114;
  "320"?: The114;
  "321"?: The114;
  "323"?: The114;
  "324"?: The114;
  "325"?: The114;
  "328"?: The114;
  "329"?: The114;
  "330"?: The114;
  "331"?: The114;
  "332"?: The114;
  "333"?: The114;
  "334"?: The114;
  "335"?: The114;
  "338"?: The114;
  "339"?: The114;
  "340"?: The114;
  "341"?: The114;
  "342"?: The114;
  "343"?: The114;
  "344"?: The114;
  "345"?: The114;
  "346"?: The114;
  "347"?: The114;
  "348"?: The114;
  "349"?: The114;
  "350"?: The114;
  "351"?: The114;
  "352"?: The114;
  "353"?: The114;
  "354"?: The114;
  "355"?: The114;
  "356"?: The114;
  "357"?: The114;
  "358"?: The114;
  "360"?: The114;
  "361"?: The114;
  "362"?: The116;
  "363"?: The116;
  "364"?: The114;
  "365"?: The114;
  "366"?: The114;
  "367"?: The114;
  "368"?: The114;
  "369"?: The114;
  "370"?: The114;
  "371"?: The114;
  "373"?: The114;
  "374"?: The114;
  "375"?: The114;
  "376"?: The114;
  "377"?: The114;
  "378"?: The114;
  "379"?: The116;
  "382"?: The114;
  "383"?: The114;
  "384"?: The114;
  "385"?: The114;
  "386"?: The114;
  "387"?: The114;
  "389"?: The114;
  "390"?: The114;
  "391"?: The114;
  "392"?: The116;
  "393"?: The116;
  "394"?: The116;
  "395"?: The116;
  "396"?: The116;
  "398"?: The116;
  "399"?: The114;
  "400"?: The114;
  "401"?: The114;
  "402"?: The114;
  "404"?: The114;
  "406"?: The114;
  "407"?: The114;
  "408"?: The114;
  "409"?: The114;
  "410"?: The116;
  "411"?: The114;
  "412"?: The114;
  "432"?: The114;
  "433"?: The114;
  "434"?: The114;
  "437"?: The114;
  "438"?: The114;
  front_de?: FrontAr;
  front_nl?: FrontBg;
  front_ro?: FrontBg;
  nutrition_it?: FrontFi;
  nutrition_nl?: FrontBg;
  nutrition_ro?: FrontBg;
  other_fr?: FrontBg;
  packaging_nl?: FrontBg;
  "49"?: The114;
  "51"?: The114;
  "53"?: The114;
  "67"?: The114;
  "68"?: The114;
  "75"?: The114;
  "86"?: The1;
  "101"?: The1;
  "104"?: The1;
  "105"?: The1;
  "114"?: The114;
  "115"?: The114;
  "118"?: The114;
  front_bg?: FrontBg;
  front_hu?: FrontBg;
  front_pt?: FrontBg;
  ingredients_bg?: FrontFi;
  ingredients_nl?: FrontFi;
  ingredients_pt?: FrontFi;
  ingredients_sr?: FrontFi;
  ingredients_sv?: FrontFi;
  ingredients_tr?: FrontBg;
  nutrition_bg?: FrontBg;
  nutrition_pt?: FrontFi;
  nutrition_sr?: FrontFi;
  nutrition_sv?: FrontFi;
  packaging_pt?: FrontFi;
  "87"?: The114;
  "96"?: The114;
  front_fi?: FrontFi;
  front_it?: FrontBg;
  front_nb?: FrontFi;
  ingredients_de?: FrontBg;
  ingredients_fi?: FrontFi;
  ingredients_it?: FrontBg;
  ingredients_ja?: IngredientsJa;
  ingredients_nb?: FrontBg;
  ingredients_pl?: FrontBg;
  nutrition_de?: FrontBg;
  nutrition_fi?: FrontFi;
  nutrition_ja?: NutritionJa;
  nutrition_nb?: FrontBg;
  packaging_de?: FrontBg;
  packaging_fi?: FrontFi;
  packaging_it?: FrontBg;
};

export type The1 = {
  sizes: Sizes;
  uploaded_t: number | string;
  uploader: string;
};

export type Sizes = {
  "100": The100;
  "400": The100;
  full: The100;
  "200"?: The100;
};

export type The100 = {
  h: number;
  w: number;
};

export type The114 = {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
};

export type The116 = {
  sizes: Sizes;
  uploaded_t: string;
  uploader: string;
};

export type FrontAr = {
  imgid: number | string;
  rev: number | string;
  sizes: Sizes;
  angle?: number;
  white_magic?: string;
};

export type FrontBg = {
  imgid: string;
  rev: string;
  sizes: Sizes;
};

export type FrontFi = {
  coordinates_image_size?: string;
  imgid: string;
  rev: string;
  sizes: Sizes;
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
};

export type IngredientsAr = {
  imgid: number | string;
  rev: number | string;
  sizes: Sizes;
  coordinates_image_size?: string;
  normalize?: string;
  white_magic?: string;
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  angle?: number;
};

export type IngredientsJa = {
  coordinates_image_size: string;
  imgid: number;
  rev: number;
  sizes: Sizes;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type NutritionJa = {
  imgid: number;
  rev: number;
  sizes: Sizes;
};

export type ProductIngredient = {
  id: string;
  is_in_taxonomy: number;
  percent_estimate: number;
  percent_max?: number;
  percent_min?: number;
  text: string;
  vegan?: FromPalmOil;
  vegetarian?: FromPalmOil;
  ciqual_food_code?: string;
  ecobalyse_proxy_id?: string;
  ecobalyse_proxy_name?: string;
  percent?: number;
  ingredients?: IngredientIngredient[];
  ciqual_proxy_food_code?: string;
  ecobalyse_code?: string;
  processing?: string;
  quantity?: string;
  quantity_g?: number;
  from_palm_oil?: FromPalmOil;
  ecobalyse_id?: string;
  ecobalyse_name?: string;
};

export type IngredientIngredient = {
  id: string;
  is_in_taxonomy: number;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  text: string;
  percent?: number;
  vegan?: FromPalmOil;
  vegetarian?: FromPalmOil;
};

export type IngredientsAnalysis = {
  "en:palm-oil-content-unknown"?: string[];
  "en:vegan-status-unknown"?: string[];
  "en:vegetarian-status-unknown"?: string[];
  "en:may-contain-palm-oil"?: string[];
  "en:maybe-vegetarian"?: string[];
  "en:non-vegan"?: string[];
  "en:maybe-vegan"?: string[];
};

export type LanguagesCodes = {
  ar?: number;
  en?: number;
  es?: number;
  fr?: number;
  de?: number;
  xx?: number;
  it?: number;
  nb?: number;
  nl?: number;
  ro?: number;
  bg?: number;
  hu?: number;
  pl?: number;
  pt?: number;
  sr?: number;
  sv?: number;
  tr?: number;
  fi?: number;
  ja?: number;
};

export type NovaGroupsTag =
  | "unknown"
  | "en:1-unprocessed-or-minimally-processed-foods"
  | "en:3-processed-foods"
  | "en:4-ultra-processed-food-and-drink-products";

export type NutrientLevels = {
  fat?: Fat;
  salt?: Fat;
  "saturated-fat"?: Fat;
  sugars?: Fat;
};

export type Fat = "low" | "moderate" | "high";

export type Nutriments = {
  "added-sugars"?: number;
  "added-sugars_100g"?: number;
  "added-sugars_modifier"?: "~";
  "added-sugars_serving"?: number;
  "added-sugars_unit"?: Unit;
  "added-sugars_value"?: number;
  carbohydrates?: number;
  carbohydrates_100g?: number;
  carbohydrates_serving?: number;
  carbohydrates_unit?: Unit;
  carbohydrates_value?: number;
  energy?: number;
  "energy-kcal"?: number;
  "energy-kcal_100g"?: number;
  "energy-kcal_serving"?: number;
  "energy-kcal_unit"?: "kcal";
  "energy-kcal_value"?: number;
  "energy-kj"?: number;
  "energy-kj_100g"?: number;
  "energy-kj_serving"?: number;
  "energy-kj_unit"?: Unit;
  "energy-kj_value"?: number;
  energy_100g?: number;
  energy_serving?: number;
  energy_unit?: Unit;
  energy_value?: number;
  fat?: number;
  fat_100g?: number;
  fat_serving?: number;
  fat_unit?: Unit;
  fat_value?: number;
  fiber?: number;
  fiber_100g?: number;
  fiber_serving?: number;
  fiber_unit?: Unit;
  fiber_value?: number;
  "fruits-vegetables-legumes-estimate-from-ingredients_100g"?: number;
  "fruits-vegetables-nuts-estimate-from-ingredients_100g"?: number;
  proteins?: number;
  proteins_100g?: number;
  proteins_serving?: number;
  proteins_unit?: Unit;
  proteins_value?: number;
  salt?: number;
  salt_100g?: number;
  salt_serving?: number;
  salt_unit?: Unit;
  salt_value?: number;
  "saturated-fat"?: number;
  "saturated-fat_100g"?: number;
  "saturated-fat_serving"?: number;
  "saturated-fat_unit"?: Unit;
  "saturated-fat_value"?: number;
  sodium?: number;
  sodium_100g?: number;
  sodium_serving?: number;
  sodium_unit?: Unit;
  sodium_value?: number;
  sugars?: number;
  sugars_100g?: number;
  sugars_serving?: number;
  sugars_unit?: Unit;
  sugars_value?: number;
  alcohol?: number;
  alcohol_100g?: number;
  alcohol_serving?: number;
  alcohol_unit?: string;
  alcohol_value?: number;
  calcium?: number;
  calcium_100g?: number;
  calcium_serving?: number;
  calcium_unit?: Unit;
  calcium_value?: number;
  "carbohydrates-total"?: number;
  "carbohydrates-total_100g"?: number;
  "carbohydrates-total_serving"?: number;
  "carbohydrates-total_unit"?: Unit;
  "carbohydrates-total_value"?: number;
  "nova-group"?: number;
  "nova-group_100g"?: number;
  "nova-group_serving"?: number;
  "nova-group_unit"?: string;
  "nova-group_value"?: number;
  copper?: number;
  copper_100g?: number;
  copper_serving?: number;
  copper_unit?: Unit;
  copper_value?: number;
  "energy-kj_modifier"?: "~";
  energy_modifier?: "~";
  iron?: number;
  iron_100g?: number;
  iron_serving?: number;
  iron_unit?: Unit;
  iron_value?: number;
  magnesium?: number;
  magnesium_100g?: number;
  magnesium_serving?: number;
  magnesium_unit?: Unit;
  magnesium_value?: number;
  manganese?: number;
  manganese_100g?: number;
  manganese_serving?: number;
  manganese_unit?: Unit;
  manganese_value?: number;
  potassium?: number;
  potassium_100g?: number;
  potassium_serving?: number;
  potassium_unit?: Unit;
  potassium_value?: number;
  salt_modifier?: "~";
  selenium?: number;
  selenium_100g?: number;
  selenium_serving?: number;
  selenium_unit?: Unit;
  selenium_value?: number;
  zinc?: number;
  zinc_100g?: number;
  zinc_serving?: number;
  zinc_unit?: Unit;
  zinc_value?: number;
  bicarbonate?: number;
  bicarbonate_100g?: number;
  bicarbonate_serving?: number;
  bicarbonate_unit?: Unit;
  bicarbonate_value?: number;
  fluoride?: number;
  fluoride_100g?: number;
  fluoride_serving?: number;
  fluoride_unit?: Unit;
  fluoride_value?: number;
  ph?: number;
  ph_100g?: number;
  ph_modifier?: string;
  ph_serving?: number;
  ph_unit?: string;
  ph_value?: number;
  chloride?: number;
  chloride_100g?: number;
  chloride_serving?: number;
  chloride_unit?: Unit;
  chloride_value?: number;
  nitrate?: number;
  nitrate_100g?: number;
  nitrate_serving?: number;
  nitrate_unit?: Unit;
  nitrate_value?: number;
  silica?: number;
  silica_100g?: number;
  silica_serving?: number;
  silica_unit?: Unit;
  silica_value?: number;
  caffeine?: number;
  caffeine_100g?: number;
  caffeine_serving?: number;
  caffeine_unit?: Unit;
  caffeine_value?: number;
  choline?: number;
  choline_100g?: number;
  choline_serving?: number;
  choline_unit?: Unit;
  choline_value?: number;
  fat_modifier?: string;
  phosphorus?: number;
  phosphorus_100g?: number;
  phosphorus_serving?: number;
  phosphorus_unit?: Unit;
  phosphorus_value?: number;
  "saturated-fat_modifier"?: string;
  starch?: number;
  starch_100g?: number;
  starch_serving?: number;
  starch_unit?: Unit;
  starch_value?: number;
  "vitamin-a"?: number;
  "vitamin-a_100g"?: number;
  "vitamin-a_serving"?: number;
  "vitamin-a_unit"?: Unit;
  "vitamin-a_value"?: number;
  "vitamin-c"?: number;
  "vitamin-c_100g"?: number;
  "vitamin-c_serving"?: number;
  "vitamin-c_unit"?: Unit;
  "vitamin-c_value"?: number;
  "vitamin-e"?: number;
  "vitamin-e_100g"?: number;
  "vitamin-e_serving"?: number;
  "vitamin-e_unit"?: Unit;
  "vitamin-e_value"?: number;
  "vitamin-k"?: number;
  "vitamin-k_100g"?: number;
  "vitamin-k_serving"?: number;
  "vitamin-k_unit"?: Unit;
  "vitamin-k_value"?: number;
  "vitamin-pp"?: number;
  "vitamin-pp_100g"?: number;
  "vitamin-pp_serving"?: number;
  "vitamin-pp_unit"?: Unit;
  "vitamin-pp_value"?: number;
  sodium_modifier?: "~";
  fiber_modifier?: "~";
  cocoa?: number;
  cocoa_100g?: number;
  cocoa_serving?: number;
  cocoa_unit?: Unit;
  cocoa_value?: number;
  "monounsaturated-fat"?: number;
  "monounsaturated-fat_100g"?: number;
  "monounsaturated-fat_serving"?: number;
  "monounsaturated-fat_unit"?: Unit;
  "monounsaturated-fat_value"?: number;
  "omega-6-fat"?: number;
  "omega-6-fat_100g"?: number;
  "omega-6-fat_serving"?: number;
  "omega-6-fat_unit"?: Unit;
  "omega-6-fat_value"?: number;
  "polyunsaturated-fat"?: number;
  "polyunsaturated-fat_100g"?: number;
  "polyunsaturated-fat_serving"?: number;
  "polyunsaturated-fat_unit"?: Unit;
  "polyunsaturated-fat_value"?: number;
  "vitamin-b1"?: number;
  "vitamin-b1_100g"?: number;
  "vitamin-b1_serving"?: number;
  "vitamin-b1_unit"?: Unit;
  "vitamin-b1_value"?: number;
  "vitamin-b2"?: number;
  "vitamin-b2_100g"?: number;
  "vitamin-b2_serving"?: number;
  "vitamin-b2_unit"?: Unit;
  "vitamin-b2_value"?: number;
  "vitamin-b6"?: number;
  "vitamin-b6_100g"?: number;
  "vitamin-b6_serving"?: number;
  "vitamin-b6_unit"?: Unit;
  "vitamin-b6_value"?: number;
  "vitamin-d"?: number;
  "vitamin-d_100g"?: number;
  "vitamin-d_serving"?: number;
  "vitamin-d_unit"?: Unit;
  "vitamin-d_value"?: number;
};

export type Unit = "g" | "kJ" | "number" | "%";

export type Nutriscore = {
  category_available: number;
  data: NutriscoreData;
  estimated?: number;
  grade: EcoscoreGrade;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  preparation?: "as_sold";
  score?: number;
};

export type NutriscoreData = {
  energy?: number | null;
  energy_points?: number;
  energy_value?: number;
  fiber?: number | null;
  fiber_points?: number;
  fiber_value?: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils?: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points?: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value?: number;
  is_beverage: number;
  is_cheese: number;
  is_fat?: number;
  is_water: boolean | number;
  negative_points?: number;
  positive_points?: number;
  proteins?: number | null;
  proteins_points?: number;
  proteins_value?: number;
  saturated_fat?: number | null;
  saturated_fat_points?: number;
  saturated_fat_value?: number;
  sodium?: number | null;
  sodium_points?: number;
  sodium_value?: number;
  sugars?: number | null;
  sugars_points?: number;
  sugars_value?: number;
  fat?: number;
  saturated_fat_ratio?: number;
  saturated_fat_ratio_points?: number;
  saturated_fat_ratio_value?: number;
  components?: Components;
  count_proteins?: number;
  count_proteins_reason?: string;
  is_fat_oil_nuts_seeds?: number;
  is_red_meat_product?: number;
  negative_points_max?: number;
  positive_nutrients?: PositiveNutrient[];
  positive_points_max?: number;
  fruits_vegetables_legumes?: number | null;
  non_nutritive_sweeteners?: number;
  salt?: null;
};

export type Components = {
  negative: Tive[];
  positive: Tive[];
};

export type Tive = {
  id: PositiveNutrient;
  points: number;
  points_max: number;
  unit: Unit;
  value: number | null;
};

export type PositiveNutrient =
  | "energy"
  | "sugars"
  | "saturated_fat"
  | "salt"
  | "non_nutritive_sweeteners"
  | "energy_from_saturated_fat"
  | "saturated_fat_ratio"
  | "proteins"
  | "fiber"
  | "fruits_vegetables_legumes";

export type NutriscoreDataClass = {
  components: Components;
  count_proteins: number;
  count_proteins_reason: string;
  grade: EcoscoreGrade;
  is_beverage: number;
  is_cheese: number | string;
  is_fat_oil_nuts_seeds: number;
  is_red_meat_product: number;
  is_water: boolean | number | string;
  negative_points: number;
  negative_points_max: number;
  positive_nutrients: PositiveNutrient[];
  positive_points: number;
  positive_points_max: number;
  score: number;
};

export type NutritionDataP = "100ml" | "100g";

export type OriginEnEnum =
  | ""
  | "France"
  | "Maroc"
  | "Made in England"
  | "Fabriqué par: Aachen Allemagne";

export type PackagingText =
  | ""
  | "Préservons l'environnement / للحافظ على البيئة"
  | "Test verpackung FR"
  | "round trip test dart";

export type PackagingTextAr = "" | "بدون غلوتين / Sans Gluten";

export type ProductPackaging = {
  food_contact?: number;
  material: string;
  shape?: string;
  number_of_units?: number;
  quantity_per_unit?: string;
  quantity_per_unit_unit?: string;
  quantity_per_unit_value?: number;
  recycling?: string;
  weight_measured?: number;
};

export type PackagingsMaterials = {
  all?: All;
  "en:plastic"?: All;
  "en:unknown"?: Grades;
  "en:glass"?: Grades;
  "en:paper-or-cardboard"?: All;
  "en:metal"?: All;
};

export type All = {
  weight?: number;
  weight_100g?: number;
  weight_percent?: number;
};

export type SelectedImages = {
  front: Front;
};

export type Front = {
  display: Display;
  small: Display;
  thumb: Display;
};

export type Display = {
  ar?: string;
  en?: string;
  es?: string;
  fr?: string;
  xx?: string;
  de?: string;
  nl?: string;
  ro?: string;
  bg?: string;
  hu?: string;
  pt?: string;
  fi?: string;
  it?: string;
  nb?: string;
};

export type Source = {
  fields: string[];
  id: string;
  images: string[];
  import_t: number;
  manufacturer?: number | string;
  name?: string;
  source_licence?: string;
  source_licence_url?: string;
  url: null | string;
};

export type SourcesFields = {
  "org-gs1": OrgGs1;
};

export type OrgGs1 = {
  gln: string;
  gpcCategoryCode: string;
  gpcCategoryName: string;
  isAllergenRelevantDataProvided: string;
  lastChangeDateTime: Date;
  partyName: string;
  publicationDateTime: Date;
};
