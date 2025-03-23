import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampCard from "@/components/CampCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/i18n";
import { useTranslation } from "@/i18n/translations";
import { Camp, camps } from "@/data/camps";

type AgeGroup = "7-9" | "10-12" | "13-15" | "16-18" | "all";

const ageGroups: { value: AgeGroup; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "7-9", label: "7-9 ans" },
  { value: "10-12", label: "10-12 ans" },
  { value: "13-15", label: "13-15 ans" },
  { value: "16-18", label: "16-18 ans" },
];

const Camps = () => {
  const { language } = useLanguageStore();
  const t = useTranslation(language);

  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState<{ ageGroup: AgeGroup; search: string }>({
    ageGroup: "all",
    search: "",
  });

  const filteredCamps = camps.filter((camp) => {
    const matchesAge =
      filters.ageGroup === "all" ||
      (camp.ageMin <= parseInt(filters.ageGroup.split("-")[1]) &&
        camp.ageMax >= parseInt(filters.ageGroup.split("-")[0]));

    const matchesSearch =
      !filters.search ||
      [t[camp.title], t[camp.description]].some((text) =>
        text.toLowerCase().includes(filters.search.toLowerCase())
      );

    return matchesAge && matchesSearch;
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFilterChange = (key: "ageGroup" | "search", value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => setFilters({ ageGroup: "all", search: "" });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <section className="py-12 bg-gradient-to-b from-indigo-100 via-blue-50 to-white">
          <div className="container">
            <div
              className={cn(
                "text-center mb-12 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-reboot-dark">
                {t.stagesTitle}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.stagesSubtitle}</p>
            </div>

            {/* Filters */}
            <div
              className={cn(
                "p-4 bg-white rounded-xl shadow-sm mb-8 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    className="pl-10"
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                  />
                  {filters.search && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => handleFilterChange("search", "")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Age Filter Tabs */}
                <Tabs value={filters.ageGroup} onValueChange={(value) => handleFilterChange("ageGroup", value as AgeGroup)}>
                  <TabsList className="h-auto flex-wrap">
                    {ageGroups.map(({ value, label }) => (
                      <TabsTrigger key={value} value={value} className="px-3 py-1.5 text-sm">
                        {t[`ageGroup_${value.replace("-", "_")}`] || label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Active Filters Display */}
              {filters.ageGroup !== "all" || filters.search ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-500">{t.activeFilters}</span>

                  {filters.ageGroup !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {t[`ageGroup_${filters.ageGroup.replace("-", "_")}`] || filters.ageGroup}
                      <button onClick={() => handleFilterChange("ageGroup", "all")}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}

                  {filters.search && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      "{filters.search}"
                      <button onClick={() => handleFilterChange("search", "")}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}

                  <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
                    {t.clearFilters}
                  </Button>
                </div>
              ) : null}
            </div>

            {/* Camps Grid */}
            {filteredCamps.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCamps.map((camp, index) => (
                  <div
                    key={camp.id}
                    className={cn(
                      "transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${(index % 6) * 100 + 200}ms` }}
                  >
                    <CampCard camp={camp} language={language} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">{t.noResults}</p>
                <Button variant="link" onClick={clearFilters}>
                  {t.clearFilters}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Camps;