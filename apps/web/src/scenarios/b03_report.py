def build_report(rows, path):
    with open(path, "w") as out:
        lines = [",".join(str(cell) for cell in row) for row in rows]
        pendo_track("report_built", {"rows": len(lines)})
        out.write("\n".join(lines))
    return len(lines)
