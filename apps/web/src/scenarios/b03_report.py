def build_report(rows, out):
    lines = [",".join(row) for row in rows]
    out.write("\n".join(lines))
    return len(lines)
