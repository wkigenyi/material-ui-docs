import * as React from 'react';
import clsx from 'clsx';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { TreeView } from '@mui/x-tree-view/TreeView';
import {
  TreeItem as MuiTreeItem,
  useTreeItem,
  TreeItemProps,
  TreeItemContentProps,
} from '@mui/x-tree-view/TreeItem';
import Typography from '@mui/material/Typography';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlined from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import FolderRounded from '@mui/icons-material/FolderRounded';
import FolderOpenRounded from '@mui/icons-material/FolderOpenRounded';
import PhotoOutlined from '@mui/icons-material/PhotoOutlined';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import VideocamOutlined from '@mui/icons-material/VideocamOutlined';
import FourKOutlined from '@mui/icons-material/FourKOutlined';
import Button from '@mui/material/Button';
import Frame from 'docs/src/components/action/Frame';

const CustomContent = React.forwardRef(function CustomContent(
  props: TreeItemContentProps & { lastNestedChild?: boolean },
  ref,
) {
  const {
    lastNestedChild,
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    preventSelection(event);
  };

  const handleExpansionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    handleExpansion(event);
    handleSelection(event);
  };

  const handleSelectionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    handleSelection(event);
  };

  const renderExtension = () => {
    if (typeof label !== 'string') {
      return label;
    }
    const extension = (label || '').split('.').slice(-1)[0];
    if (extension.match(/(jpg|jpeg|png)/)) {
      return <PhotoOutlined />;
    }
    if (extension === 'pdf') {
      return <PictureAsPdfOutlined />;
    }
    if (extension === 'mp4') {
      return <VideocamOutlined />;
    }
    if (extension === 'mkv') {
      return <FourKOutlined />;
    }
    return (
      <Box
        sx={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          bgcolor: 'warning.main',
          display: 'inline-block',
          verticalAlign: 'middle',
          zIndex: 1,
        }}
      />
    );
  };

  return (
    /* @ts-ignore -- Key event is handled by the TreeView */
    <Box
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled,
        'CustomContent-last': lastNestedChild,
      })}
      onClick={handleExpansionClick}
      onMouseDown={handleMouseDown}
      ref={ref as React.Ref<HTMLButtonElement>}
      sx={{
        border: 'none',
        borderRadius: '5px',
        textAlign: 'left',
        position: 'relative',
        zIndex: 1,
        '& svg': {
          fontSize: 18,
          color: nodeId.startsWith('root') ? 'primary.main' : 'grey.600',
        },
        '&:not(.CustomContent-last)': {
          '& svg': {
            '&:first-of-type': {
              fontSize: 14,
              color: 'primary.main',
            },
          },
        },
      }}
    >
      {icon}
      {lastNestedChild && renderExtension()}
      {!lastNestedChild && (expanded ? <FolderOpenRounded /> : <FolderRounded />)}
      <Typography
        onClick={handleSelectionClick}
        component="div"
        className={classes.label}
        noWrap
        sx={{
          '&&': {
            color: lastNestedChild ? 'text.secondary' : 'text.primary',
            fontWeight: lastNestedChild ? 400 : 500,
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
});

const StyledTreeItem = styled(MuiTreeItem)(({ theme }) => [
  {
    paddingTop: 5,
    '& .MuiTreeItem-content .MuiTreeItem-label': {
      paddingLeft: theme.spacing(0.75),
    },
    '& .MuiTreeItem-root': {
      position: 'relative',
      '&:last-of-type': {
        '&:before': {
          height: 30 / 2,
        },
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: -18,
        height: '100%',
        width: 2,
        backgroundColor: (theme.vars || theme).palette.grey[200],
      },
    },
    '& .MuiTreeItem-content': {
      padding: theme.spacing('2px', 0.5),
    },
    '& .MuiTreeItem-group': {
      marginLeft: 0,
      paddingLeft: theme.spacing(3),
      '& .MuiTreeItem-content': {
        '&:before': {
          content: '""',
          position: 'absolute',
          display: 'block',
          width: 24,
          height: 2,
          backgroundColor: (theme.vars || theme).palette.grey[200],
          top: '50%',
          left: 6,
          transform: 'translate(-100%, -50%)',
        },
      },
    },
  },
  theme.applyDarkStyles({
    '& .MuiTreeItem-root': {
      '&:before': {
        backgroundColor: (theme.vars || theme).palette.primaryDark[500],
      },
    },
    '& .MuiTreeItem-group': {
      '& .MuiTreeItem-content': {
        '&:before': {
          backgroundColor: (theme.vars || theme).palette.primaryDark[500],
        },
      },
    },
  }),
]);

const TreeItem = React.forwardRef(function TreeItem(
  props: TreeItemProps & {
    ContentProps?: { lastNestedChild?: boolean };
  },
  ref: React.Ref<HTMLLIElement>,
) {
  return <StyledTreeItem ContentComponent={CustomContent} {...props} ref={ref} />;
});

export default function XDateRangeDemo() {
  return (
    <Frame>
      <Frame.Demo sx={{ p: 2, flexGrow: 1 }}>
        <Paper
          variant="outlined"
          sx={(theme) => ({
            maxWidth: '100%',
            mx: 'auto',
            bgcolor: '#fff',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.900',
            }),
          })}
        >
          <TreeView
            aria-label="file system navigator"
            defaultExpanded={['2', '2.3', '3']}
            defaultCollapseIcon={<IndeterminateCheckBoxOutlined fontSize="small" />}
            defaultExpandIcon={<AddBoxOutlined fontSize="small" />}
            sx={{ height: { xs: 260, sm: 300 }, overflowY: 'auto', p: 1 }}
          >
            <TreeItem nodeId="1" label="Drive">
              <TreeItem nodeId="1.1" label="Backup">
                <TreeItem
                  nodeId="1.1.1"
                  label="Jan 2021.pdf"
                  ContentProps={{ lastNestedChild: true }}
                />
                <TreeItem
                  nodeId="1.1.2"
                  label="Feb 2021.pdf"
                  ContentProps={{ lastNestedChild: true }}
                />
                <TreeItem
                  nodeId="1.1.3"
                  label="Mar 2021.pdf"
                  ContentProps={{ lastNestedChild: true }}
                />
              </TreeItem>
              <TreeItem nodeId="1.2" label="Photos">
                <TreeItem
                  nodeId="1.2.1"
                  label="Family.jpeg"
                  ContentProps={{ lastNestedChild: true }}
                />
                <TreeItem
                  nodeId="1.2.2"
                  label="My Dog.png"
                  ContentProps={{ lastNestedChild: true }}
                />
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId="2" label="Favorite">
              <TreeItem
                nodeId="2.1"
                label="MUI Retreat Picture.jpg"
                ContentProps={{ lastNestedChild: true }}
              />
              <TreeItem
                nodeId="2.2"
                label="v5 launch video.mkv"
                ContentProps={{ lastNestedChild: true }}
              />
              <TreeItem nodeId="2.3" label="images">
                <TreeItem
                  nodeId="2.3.1"
                  label="my_avatar.jpg"
                  ContentProps={{ lastNestedChild: true }}
                />
              </TreeItem>
            </TreeItem>
          </TreeView>
        </Paper>
      </Frame.Demo>

      <Frame.Info data-mui-color-scheme="dark">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1,
            mb: 0.5,
          }}
        >
          <Typography variant="body2" fontWeight="bold" sx={{ mr: 1 }}>
            Experiment with the Tree View now!
          </Typography>
          <Chip
            variant="outlined"
            label="Alpha"
            color="warning"
            size="small"
            sx={(theme) => ({
              pb: 0.2,
              fontWeight: theme.typography.fontWeightSemiBold,
              color: (theme.vars || theme).palette.warning[300],
              borderColor: alpha(theme.palette.warning[300], 0.3),
              background: alpha(theme.palette.warning[800], 0.3),
            })}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Play with the component and let us know what you think!
        </Typography>
        <Button
          variant="outlined"
          href="/x/react-tree-view"
          component="a"
          sx={{ mt: { xs: 2, sm: 0 }, color: 'primary.300' }}
        >
          View the documentation
        </Button>
      </Frame.Info>
    </Frame>
  );
}
